const connection = require("../../database/index");

class Article {
  //init all the value at the creation of Article
  constructor() {
    this.articles = [];
    this.gender = null;
  }

  //get all articles from db
  get getAllArticles() {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          //get articles from all the table and send object {name, description, datetime, price, note, brand, pattern, gender, type, id}
          "SELECT a.article_name as name, a.article_description as description, a.article_datetime as datetime, a.article_price as price, a.article_note as note, a.article_id as id, b.brand_name as brand, p.pattern_name as pattern, g.gender_name as gender, t.type_name as type FROM article a INNER JOIN brand b ON b.brand_id = a.brand_id INNER JOIN pattern p ON p.pattern_id = a.pattern_id INNER JOIN gender g ON g.gender_id = a.gender_id INNER JOIN type t ON t.type_id = a.type_id",
          (err, result) => {
            if (err) throw err;

            //put values on articles with the result get on the db
            this.articles = result;
            //return all the articles
            resolve(result);
          }
        );
      } catch (error) {
        reject("api error");
      }
    });
  }

  get getArticlesByGender() {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          `SELECT a.article_name as name, a.article_description as description, a.article_datetime as datetime, a.article_price as price, a.article_note as note, a.article_id as id, b.brand_name as brand, p.pattern_name as pattern, g.gender_name as gender, t.type_name as type FROM article a INNER JOIN brand b ON b.brand_id = a.brand_id INNER JOIN pattern p ON p.pattern_id = a.pattern_id INNER JOIN gender g ON g.gender_id = a.gender_id INNER JOIN type t ON t.type_id = a.type_id WHERE g.gender_name = '${this.gender}'`,
          (err, result) => {
            if (err) throw err;
            this.articles = result;
            resolve(result);
          }
        );
      } catch (error) {
        reject("api error");
      }
    });
  }
}

module.exports = Article;
