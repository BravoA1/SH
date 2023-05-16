const router = require("express").Router();
const apiUsers = require("./users");
const apiAuth = require("./auth");
const apiUpdate = require("./update");
const apiComment = require("./comment");
const apiArticle = require('./articles');

router.use("/users", apiUsers);
router.use("/auth", apiAuth);
router.use("/update", apiUpdate);
router.use("/comment", apiComment);
router.use('/articles', apiArticle);

module.exports = router;
