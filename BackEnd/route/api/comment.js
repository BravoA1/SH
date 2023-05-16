const router = require("express").Router();
const connection = require("../../database/index");

router.post("/", async (req, res) => {
  const id = parseInt(req.body.id);
  const userId = req.body.userId;
  const rating = req.body.score;
  const comment = req.body.comment.comment;
  console.log(comment); 
  const dateComment = req.body.currentDate;
  console.log(req.body);

  try {
    const sqlInsert = `INSERT INTO comment (comment_score, user_id, article_id, comment_date, comment_content) VALUES ( ?, ?, ?, ?, ? )`;
    const values = [rating, userId, id, dateComment, comment];
    connection.query(sqlInsert, values, (err, result) => {
      if (err) throw err;
    });
  } catch (error) {
    res.send("Not Verified");
  }
}); 

module.exports = router;
 