// this is going to be dummy example to see if it going through the database
// it will be change to data from nyt api.

const mongoose = require("mongoose");
const db = require("../models");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytArticles");

const articlesSeed = [
    {
        title: 'Ali Sells Jersey House And Moves to Chicago',
        date: '1974-07-18T00:00:00Z',
        url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
      },
      {
        title: 'Frozen',
        date: '1990-07-18T00:00:00Z',
        url: 'https://en.wikipedia.org/wiki/Frozen_(2013_film)'
      },
      {
        title: 'Walt Disney',
        date: '1974-07-18T00:00:00Z',
        url: 'https://en.wikipedia.org/wiki/Walt_Disney_Animation_Studios'
      }   
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articlesSeed ))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });