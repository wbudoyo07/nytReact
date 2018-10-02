const router = require("express").Router();
const articlesRoutes = require("./ArticlesApi");

// Book routes
router.use("/articles", articlesRoutes);

module.exports = router;
