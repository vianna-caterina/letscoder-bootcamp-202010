const { validateEmail, validatePassword } = require("./helpers/validations");
const { User } = require("../models");
const { ConflictError } = require("../errors");

module.exports = function (email, password) {
  validateEmail(email);
  validatePassword(password);

  return User.findOne({ email, password }).then((user) => {
    if (!user) throw new ConflictError("wrong credentials");

    const { _id: id } = user;

    return User({ id });
  });
};
