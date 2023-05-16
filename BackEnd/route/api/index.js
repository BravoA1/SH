const router = require("express").Router();
const apiUsers = require("./users");
const apiAuth = require("./auth");
const apiUpdate = require("./update");
const apiComment = require("./comment");

router.use("/users", apiUsers);
router.use("/auth", apiAuth);
router.use("/update", apiUpdate);
router.use("/comment", apiComment);

module.exports = router;
