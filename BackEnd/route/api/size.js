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
      let resultat = []
      result.map((r) => {
        // Reflect.deleteProperty(r, "article_id");
        resultat.push(r.size_id)
      });
      res.json(resultat);
    });
  } catch (error) {
    reject("api error");
  }
});

module.exports = router;
