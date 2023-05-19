const router = require("express").Router();
const apiUsers = require("./users");
const apiAuth = require("./auth");
const apiUpdate = require("./update");
const apiArticle = require("./articles");
const apiSize = require("./size");

router.use("/users", apiUsers);
router.use("/auth", apiAuth);
router.use("/update", apiUpdate);
router.use("/articles", apiArticle);
router.use("/size", apiSize);

module.exports = router;
