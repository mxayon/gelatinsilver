var express = require('express');
var app = express();

// temp data
var cat = [
  'Pumpkin',
  'Jack',
  'Maxycat'
];

var tacotruck = [
  'TruckGas',
  'StoveGas',
  'Ingredients',
  'Utensils'
];

// ROUTES

// Serve Static Files
// '/images', '/scripts', '/styles'
app.use(express.static('public'));


// HTML endpoints
app.get('/', function (req, res) {
  res.send('Hello World!');
});


// SERVER START
app.listen(process.env.PORT || 3000, function () {
  console.log('Info beaming @ http://localhost:3000/');
});
