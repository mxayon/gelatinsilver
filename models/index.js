const mongoose = require('mongoose');
mongoose.connect( process.env.PROD_MONGODB || "mongodb://localhost/gelatinsilver", { useNewUrlParser: true });

module.exports.Photo = require("./photo.js");
