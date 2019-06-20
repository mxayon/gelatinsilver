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
app.get('/', function (req, res) {
  res.send('Hello World!');
});


// SERVER START
app.listen(3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
