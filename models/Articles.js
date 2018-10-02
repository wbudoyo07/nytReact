const mongoose = require("mongoose");

// Svae a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const ArticleSchema = new Schema({
  //title (Title of the stored article from nytimes.com)
  title: {
    type: String,
    required: true
  },
  // date (publish date and time of the article)
  date : {
    type: String,
    required: true
  },
  //url (URL of the article on nytimes.com)
  url: {
    type: String,
    require: true
  }
});

const Article = mongoose.model("Article", ArticleSchema );

module.exports = Article;

