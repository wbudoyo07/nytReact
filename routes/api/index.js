const router = require("express").Router();
const articlesRoutes = require("./ArticlesApi");

// Articles routes it's become /api/articles
router.use("/articles", articlesRoutes);

module.exports = router;
