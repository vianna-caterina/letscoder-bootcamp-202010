const {
  validateId,
  validateText,
  validateTags,
  validateVisibility,
  validateCallback,
} = require("./helpers/validations");
const { ObjectId } = require("mongodb");
const { ConflictError } = require("../errors");
const { Notes } = require("../models");

module.exports = function (ownerId, noteId, text, tags, visibility) {
  validateId(ownerId);
  if (typeof noteId !== "undefined") validateId(noteId);
  validateText(text);
  validateTags(tags);
  validateVisibility(visibility);

  const _id = ObjectId(ownerId);

  return users.findOne({ _id }).then((user) => {
    if (!user) throw new ConflictError(`user with id ${ownerId} not found`);

    if (noteId) {
      const _id = ObjectId(noteId);

      return notes.findOne({ _id }).then((note) => {
        if (!note) throw new ConflictError(`note with id ${noteId} not found`);

        return Notes.create({ text, tags, visibility, owner, date });
      });
    } else return Notes.create({ text, tags, visibility, owner, date });
  });
};
