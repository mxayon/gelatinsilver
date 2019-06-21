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

// Calling temp data on server
app.get('/api/cat', function (req, res) {
  res.json(cat);
});
// Calling v2 temp
app.get('/api/tacotruck', function (req, res) {
  res.json(tacotruck);
});

// HTML endpoints
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Json api endpoints
app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Mx ",
    documentation_url: "https://github.com/mxayon/gelatinsilver/blob/master/README.md", // CHANGE ME
    base_url: "https://gelatinsilver.herokuapp.com/", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"},
      {method: "GET", path: "/api/photos", description: "Photographs"},
      {method: "GET", path: "/api/photos/:id", description: "Photographs by id"},
      {method: "PUT", path: "/api/photos/:id", description: "Edit photographs"},
      {method: "POST", path: "/api/photos", description: "Add new photo"},
      {method: "DELTE", path: "/api/photos/:id", description: "Delete photo"}, 
    ]
  });
});



// process.env.PORT ||
// SERVER START
app.listen(3000, function () {
  console.log('Info beaming @ http://localhost:3000/');
});
