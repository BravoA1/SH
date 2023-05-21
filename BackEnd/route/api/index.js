const router = require("express").Router();
const apiUsers = require("./users");
const apiAuth = require("./auth");
const apiUpdate = require("./update");
const apiArticle = require("./articles");
const apiCart = require("./cart");
const apiImage = require("./image");

router.use("/users", apiUsers);
router.use("/auth", apiAuth);
router.use("/update", apiUpdate);
router.use("/articles", apiArticle);
router.use("/cart", apiCart);
router.use("/image", apiImage);

module.exports = router;
