var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/gelatin");

module.exports.Photo = require("./photo.js");
