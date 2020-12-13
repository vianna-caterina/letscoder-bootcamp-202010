debugger;
const { Router } = require("express");
const { jsonBodyParser } = require("../../middlewares");

const {
  handleRegisterUser,
  handleAuthenticateUser,
  handleRetrieveUser,
  handleSaveActivity,
  handleRetrieveActivity,
  handleSearchActivity,
} = require("./handlers");

const withErrorHandling = require("./helpers/with-error-handling");

const router = new Router();

// router.use(jsonBodyParser)

router.post(
  "/api/users",
  jsonBodyParser,
  withErrorHandling(handleRegisterUser)
);
/* 
// .post /api/activites/all
 */
router.post(
  "/api/users/auth",
  jsonBodyParser,
  withErrorHandling(handleAuthenticateUser)
);

router.post(
  "/api/activity",
  jsonBodyParser,
  withErrorHandling(handleSaveActivity)
);

/* router.post(
  "/api/activity/:activityId/images",
  withErrorHandling(handleSaveActivityImage)
); */

router.get("/api/activity", withErrorHandling(handleRetrieveActivity));

router.get(`/api/activity/search`, withErrorHandling(handleSearchActivity));

router.get("/api/users", withErrorHandling(handleRetrieveUser));

module.exports = router;
