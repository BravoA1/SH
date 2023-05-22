const connection = require("../index");
const Photo = require("./photo.model");

class Article {
  //init all the value at the creation of Article
  constructor() {
    this.articles = [];
    this.article = null;
  }

  //get all articles from db
  getAllArticles() {
    const photo = new Photo();
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          //get articles from all the table and send object {name, description, datetime, price, note, brand, pattern, gender, type}
          "SELECT a.article_id as id, a.article_name as name, a.article_description as description, a.article_price as price, a.article_note as note, b.brand_name as brand, p.pattern_name as pattern, g.gender_name as gender, t.type_name as type FROM article a INNER JOIN brand b ON b.brand_id = a.brand_id INNER JOIN pattern p ON p.pattern_id = a.pattern_id INNER JOIN gender g ON g.gender_id = a.gender_id INNER JOIN type t ON t.type_id = a.type_id",
          async (err, result) => {
            if (err) throw err;
            await Promise.all(
              result.map(async (article) => {
                const img = await photo.getPhotoByArticleId(article.id);
                this.articles.push({
                  ...article,
                  img: { id: img.id, urlImg: img.urlImg },
                });
              })
            );
            resolve(this.articles);
          }
        );
      } catch (error) {
        reject("api error");
      }
    });
  }
  getArticlesByGender(gender) {
    const photo = new Photo();
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          `SELECT a.article_id as id, a.article_name as name, a.article_description as description, a.article_price as price, a.article_note as note, b.brand_name as brand, p.pattern_name as pattern, g.gender_name as gender, t.type_name as type FROM article a INNER JOIN brand b ON b.brand_id = a.brand_id INNER JOIN pattern p ON p.pattern_id = a.pattern_id INNER JOIN gender g ON g.gender_id = a.gender_id INNER JOIN type t ON t.type_id = a.type_id WHERE g.gender_name = '${gender}'`,
          async (err, result) => {
            if (err) throw err;
            await Promise.all(
              result.map(async (article) => {
                const img = await photo.getPhotoByArticleId(article.id);
                this.articles.push({
                  ...article,
                  img: { id: img.id, urlImg: img.urlImg },
                });
              })
            );
            resolve(this.articles);
          }
        );
      } catch (error) {
        reject("api error");
      }
    });
  }

  getArticleById(id) {
    const photo = new Photo();
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          `SELECT a.article_id as id, a.article_name as name, a.article_description as description, a.article_price as price, a.article_note as note, b.brand_name as brand, p.pattern_name as pattern, g.gender_name as gender, t.type_name as type FROM article a INNER JOIN brand b ON b.brand_id = a.brand_id INNER JOIN pattern p ON p.pattern_id = a.pattern_id INNER JOIN gender g ON g.gender_id = a.gender_id INNER JOIN type t ON t.type_id = a.type_id WHERE a.article_id = '${id}'`,
          (err, result) => {
            if (err) throw err;
            this.article = result[0];
          }
        );
        connection.query(
          "SELECT asi.size_id as id, article_id as idArticle, size_name as name, size_size as size FROM article_size asi INNER JOIN size s ON s.size_id = asi.size_id WHERE asi.article_id = ?",
          [id],
          (err, result) => {
            if (err) throw err;
            this.article = { ...this.article, size: result };
          }
        );
        connection.query(
          "SELECT stock_id as id, stock_quantity as quantity, color_id as colorId, size_id as sizeId FROM stock WHERE article_id = ?",
          [id],
          (err, result) => {
            if (err) throw err;
            this.article = { ...this.article, stock: result };
          }
        );
        connection.query(
          "SELECT c.color_id as id, c.color_name as name, ac.article_id as articleId FROM article_color ac INNER JOIN color c ON c.color_id = ac.color_id WHERE ac.article_id = ?",
          [id],
          async (err, result) => {
            if (err) throw err;
            const img = await photo.getAllPhotoByArticleId(this.article.id);
            this.article = { ...this.article, color: result, img };
            resolve(this.article);
          }
        );
      } catch (error) {
        reject("api error");
      }
    });
  }
}

module.exports = Article;
