var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PhotoSchema = new Schema({
  image: String,
  type: String,
  location: String,
  film_type: String,
  settings: String,
  camera: String,
  description: String
});


var Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
