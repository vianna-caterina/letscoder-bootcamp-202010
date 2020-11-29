const { createId } = require("../utils/ids");
const fs = require("fs");
const path = require("path");
const Session = require("../data/models/session.js");

const createSessionCookie = (sessionId) => {
  return `session-id=${sessionId}; expires=${new Date(
    Date.now() + 60 * 60 * 1000
  ).toUTCString()}`;
};

module.exports = (req, res, next) => {
  const {
    cookies: { "session-id": id = createId() },
  } = req;

  res.setHeader("set-cookie", createSessionCookie(id));

  const session = new Session(id);

  session.exists((exists) => {
    if (exists) {
      session
        .load()
        .then((req.session = session))
        .catch(() => {
          res.status(500).send("server error :(");
        });
      next();
    } else {
      session
        .save()
        .then((req.session = session))
        .catch((error) => {
          if (error) res.status(500).send("server error :(");
          next();
        });
    }
  });
};
