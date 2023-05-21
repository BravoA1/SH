const connection = require("../../database");

const router = require("express").Router();

router.post("/", (req, res) => {
  const id = req.body.id;
  console.log(id);
  const sql = `SELECT * FROM article_material WHERE article_id = "${id}"`;
  try {
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      let resultat = [];
      result.map((r) => {
        resultat.push({ material: r.material_id, percentage: r.percentage });
      });
      res.json(resultat);
    });
  } catch (error) {
    reject("api error");
  }
});

module.exports = router;
