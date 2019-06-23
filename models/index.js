var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds341837.mlab.com:41837/heroku_6qm6hd64", { useNewUrlParser: true });

module.exports.Photo = require("./photo.js");
