var express = require('express');
var app = express();

// parse incoming URL encoded from data
// populate req.body obj
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// allow cross origin requests
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ************ DATABASE **********/
var db = require('./models');


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

// ***************  ROUTES ********* /

// Serve Static Files
// '/images', '/scripts', '/styles'
app.use(express.static('public'));


// HTML endpoints
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// process.env.PORT ||
// SERVER START
app.listen(process.env.PORT || 3000, function () {
  console.log('Info beaming @ http://localhost:3000/');
});
