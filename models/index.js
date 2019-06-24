var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/gelatinsilver");

module.exports.Photo = require("./photo.js");
