const router = require("express").Router();

const { asyncWrapper, requireLogin } = require("../middlewares");
const { add, getAll, accept, reject } = require("../controllers/school");

// add a school (we have to be able to add schools first to be able to find data to accept or reject later)
router.post("/", requireLogin, asyncWrapper(add));

// get all schools
router.get("/", requireLogin, asyncWrapper(getAll));

// accept a school
router.post("/accept", requireLogin, asyncWrapper(accept));

// reject a school
router.post("/reject", requireLogin, asyncWrapper(reject));

module.exports = router;
