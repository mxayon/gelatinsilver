const mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/gelatinsilver", { useNewUrlParser: true });

module.exports.Photo = require("./photo.js");
