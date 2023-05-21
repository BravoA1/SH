const connection = require("../index");

class Photo {
  constructor() {}

  getPhotoByArticleId(idArticle) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "SELECT photo_id as id, photo_url as urlImg FROM photo WHERE photo_main = 1 AND article_id = ?",
          [idArticle],
          async (err, result) => {
            if (err) throw err;
            resolve({ id: result[0].id, urlImg: result[0].urlImg });
          }
        );
      } catch (error) {
        reject("API error");
      }
    });
  }

  getAllPhotoByArticleId(idArticle) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "SELECT photo_id as id, photo_url as urlImg FROM photo WHERE article_id = ?",
          [idArticle],
          async (err, result) => {
            if (err) throw err;
            var img = [];
            result.map((image) => {
              img.push({ id: image.id, urlImg: image.urlImg });
            });
            resolve(img);
          }
        );
      } catch (error) {
        reject("API error");
      }
    });
  }
}

module.exports = Photo;
