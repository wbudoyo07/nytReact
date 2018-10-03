import axios from "axios";
// const APIKEY = "6ea908990aa6408c900d8f4867a3b02a";
// const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

export default {
    
    // Get all articles informations
    getArticles: function () {
        return axios.get("/api/articles");
    },

    // Delete an articles with the given id
    deleteArticles: function(id) {
        return axios.delete("/api/articles/" + id);
    },

    //Saves  an articles  to the database
    saveArticle: function(articlesData) {
        return axios.post("/api/articles" + articlesData );
    }
};