const connection = require("../../database");

const router = require("express").Router();

router.post("/", (req, res) => {
  const id = req.body.id;
  console.log(id);
  const sql = `SELECT * FROM article_size WHERE article_id = "${id}"`;
  try {
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      result.map((r) => {
        Reflect.deleteProperty(r, "article_id");
      });
      res.json(result);
    });
  } catch (error) {
    reject("api error");
  }
});

module.exports = router;
