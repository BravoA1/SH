const router = require("express").Router();
const Cart = require("../../database/model/cart.model");

router.post("/addArticle", async (req, res) => {
  const { idUser, idArticle, idSize, idColor } = req.body;
  const cart = new Cart();
  res.json(await cart.addArticleToCart(idUser, idArticle, idSize, idColor));
});

router.get('/getCart', async(req,res)=>{
  const {idUser} = req.query;
  const cart = new Cart();
  res.send(await cart.getCart(idUser));
});

router.put('/updateArticleQuantity', async(req,res)=>{
  const {idUser, idArticle, quantity} = req.body;
  const cart = new Cart();
  res.send(await cart.updateQuantityArticle(idUser, idArticle, quantity));
});

router.delete('/deleteArticle', async(req, res)=>{
  const {idUser, idArticle} = req.body;
  const cart = new Cart();
  res.send(await cart.deleteArticleToCart(idArticle, idUser));
});

module.exports = router;
