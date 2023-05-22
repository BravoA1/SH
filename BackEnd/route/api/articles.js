const router = require('express').Router();
const Article = require('../../database/model/articles.model');

//get all articles from db
router.get('/getArticles', async(req,res)=>{
    //create new object article
    const article = new Article();
    //call fonction all for take all article from db
    await article.getAllArticles();
    //send all articles
    res.json(article.articles);
});

//get only articles for men from db
router.get('/getArticlesByGenderMan', async(req, res)=>{
    const article = new Article();
    await article.getArticlesByGender("Homme");
    res.json(article.articles);
});

//get only articles for woman from db
router.get('/getArticlesByGenderWoman', async(req, res)=>{
    const article = new Article();
    await article.getArticlesByGender("Femme");
    res.json(article.articles);
});

//get only articles for kid from db
router.get('/getArticlesByGenderKid', async(req, res)=>{
    const article = new Article();
    await article.getArticlesByGender("Enfant");
    res.json(article.articles);
});

router.get('/getArticleById', async(req, res)=>{
    const {id} = req.query;
    const article = new Article();
    await article.getArticleById(id);
    res.json(article.article);
});

module.exports = router;