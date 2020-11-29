const { ObjectId } = require("mongodb");
const { validateId } = require("./helpers/validations");
const { NotFoundError } = require("../errors");
const { User } = require("../models");

module.exports = function (userId) {
  validateId(userId);

  const _id = ObjectId.createFromHexString(userId);

  return User.findOne({ _id }).then((user) => {
    if (!user)
      throw new NotFoundError(`The user with id ${userId} was not found`);

    const { _id, fullname, email } = user;

    user = { userId: _id, fullname, email };

    return user;
  });
};
