const connection = require("../index");
const Photo = require("./photo.model");

class Cart {
  constructor() {
    this.articles = [];
  }

  getCart(idUser) {
    const photo = new Photo();
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "SELECT a.article_id as id, a.article_name as name, a.article_price as price, t.type_name as model, br.brand_name as brand, s.size_name as sizeName, s.size_size as sizeSize, ba.article_quantity as quantity, p.pattern_name as motif, st.stock_quantity as stock FROM basket b INNER JOIN basket_article ba ON ba.basket_id = b.basket_id INNER JOIN article a ON ba.article_id = a.article_id INNER JOIN brand br ON br.brand_id = a.brand_id INNER JOIN pattern p ON p.pattern_id = a.pattern_id INNER JOIN type t ON t.type_id = a.type_id INNER JOIN gender g ON g.gender_id = a.gender_id INNER JOIN size s ON s.size_id = ba.size_id INNER JOIN stock st ON st.article_id = a.article_id AND st.color_id = ba.color_id AND st.size_id = ba.size_id WHERE b.user_id = ? AND b.basket_valid = 1",
          [idUser],
          async (err, result) => {
            if (err) throw err;
            if (result.length >= 0) {
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
            } else {
              resolve([]);
            }
          }
        );
      } catch (error) {
        reject("API Error");
      }
    });
  }

  addArticleToCart(idUser, idArticle, idSize, idColor) {
    return new Promise(async (resolve, reject) => {
      var idCart = await this.verifyUserHaveCart(idUser);
      if (idCart === 0) {
        idCart = await this.createCartForUser(idUser);
      }

      if (!(await this.verifyArticleExistInCart(idArticle, idCart))) {
        if (await this.addArticle(idArticle, idCart, idSize, idColor, 1)) {
          resolve("Article bien ajouter au panier");
        } else {
          resolve("API error");
        }
      }
    });
  }

  deleteArticleToCart(idArticle, idUser) {
    return new Promise(async (resolve, reject) => {
      var idCart = await this.verifyUserHaveCart(idUser);
      try {
        connection.query(
          "DELETE FROM basket_article WHERE article_id = ? AND basket_id = ?",
          [idArticle, idCart],
          (err, result) => {
            if (err) throw err;
            if (result.affectedRows === 1) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
        );
      } catch (error) {
        reject("API error");
      }
    });
  }

  updateQuantityArticle(idUser, idArticle, quantity) {
    return new Promise(async (resolve, reject) => {
      var idCart = await this.verifyUserHaveCart(idUser);
      console.log(idCart, idArticle, quantity);
      try {
        connection.query(
          "UPDATE basket_article SET article_quantity = ? WHERE article_id = ? AND basket_id = ?",
          [quantity, idArticle, idCart],
          (err, result) => {
            if (err) throw err;
            if (result.affectedRows === 1) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
        );
      } catch (error) {
        reject("API error");
      }
    });
  }

  verifyUserHaveCart(idUser) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "SELECT basket_id as id FROM basket WHERE user_id = ? AND basket_valid = 1",
          [idUser],
          (err, result) => {
            if (err) throw err;
            if (result.length >= 0) {
              resolve(result[0].id);
            } else {
              resolve(0);
            }
          }
        );
      } catch (error) {
        reject("API error");
      }
    });
  }

  createCartForUser(idUser) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "INSERT INTO basket (basket_valid, basket_datetime_creation, user_id) VALUES (1, NOW(), ?)",
          [idUser],
          (err, result) => {
            if (err) throw err;
            resolve(result.insertId);
          }
        );
      } catch (error) {
        reject("API error");
      }
    });
  }

  addArticle(idArticle, idCart, idSize, idColor, quantityArticle) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "INSERT INTO basket_article (article_id, basket_id, size_id, color_id, article_quantity) VALUES (?,?,?,?,?)",
          [idArticle, idCart, idSize, idColor, quantityArticle],
          (err, result) => {
            if (err) throw err;
            if (result.affectedRows === 1) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
        );
      } catch (error) {
        reject("API error");
      }
    });
  }

  verifyArticleExistInCart(idArticle, idCart) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "SELECT * FROM basket_article WHERE article_id = ? AND basket_id = ?",
          [idArticle, idCart],
          (err, result) => {
            if (err) throw err;
            if (result.length > 0) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
        );
      } catch (error) {
        reject("API error");
      }
    });
  }
}

module.exports = Cart;
