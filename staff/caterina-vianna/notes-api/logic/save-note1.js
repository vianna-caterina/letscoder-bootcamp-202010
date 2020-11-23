const {
  validateId,
  validateText,
  validateTags,
  validateVisibility,
  validateCallback,
} = require("./helpers/validations");
const context = require("./context");

const {
  env: { DB_NAME },
} = process;

const db = connection.db(DB_NAME);

const users = db.collection("users");

module.exports = function (ownerId, noteId, text, tags, visibility, callback) {
  validateId(ownerId);
  if (typeof noteId !== "undefined") validateId(noteId);
  validateText(text);
  validateTags(tags);
  validateVisibility(visibility);
  validateCallback(callback);

  const { connection } = context;

  const db = connection.db(DB_NAME);

  const users = db.collection("users");
  const notes = db.collection("notes");

  user = { ownerId, noteId, text, tags, visibility };
  users.insertOne(user, (error, result) => {
    if (error) {
      return callback(error);
    }
    callback(null);
  });
};
