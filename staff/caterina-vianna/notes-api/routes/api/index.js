const { Router } = require("express");
const {
  cookieParser,
  cookieSession,
  jsonBodyParser,
} = require("../../middlewares");

const {
  handleAcceptCookies,
  handleRegisterUser,
  handleAuthenticateUser,
  handleRetrieveUser,
} = require("./handlers");
const handleSaveNote = require("./handlers/handle-save-note");

const withErrorHandling = require("./helpers/with-error-handling");

const router = new Router();

router.post(
  "/api/accept-cookies",
  cookieParser,
  cookieSession,
  withErrorHandling(handleAcceptCookies)
);

router.post(
  "/api/users",
  jsonBodyParser,
  withErrorHandling(handleRegisterUser)
);

router.post(
  "/api/users/auth",
  jsonBodyParser,
  withErrorHandling(handleAuthenticateUser)
);

router.get("/api/users", withErrorHandling(handleRetrieveUser));

router.post("/api/notes", jsonBodyParser, withErrorHandling(handleSaveNote));

module.exports = router;
