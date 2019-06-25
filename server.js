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

// ***************  ROUTES ********* /

// Serve Static Files
// '/images', '/scripts', '/styles'
app.use(express.static('public'));


// HTML endpoints
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Json api endpoints
app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Gelatin Silver Processed Endpoints",
    documentation_url: "https://github.com/mxayon/gelatinsilver/blob/master/README.md", // proj readme
    base_url: "https://gelatinsilver.herokuapp.com/", // proj url
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "About"},
      {method: "GET", path: "/api/photos", description: "All Photos"},
      {method: "GET", path: "/api/photos/:id", description: "Photo by id"},
      {method: "PUT", path: "/api/photos/:id", description: "Edit Photo"},
      {method: "POST", path: "/api/photos", description: "Add new Photo"},
      {method: "DELTE", path: "/api/photos/:id", description: "Delete Photo"},
    ]
  });
});

app.get('/api/profile', function api_profile(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    name: "MX NAKPIL",
    github_link: "https://github.com/mxayon",
    github_profile_image: "https://avatars2.githubusercontent.com/u/19865986?s=460&v=4",
    current_city: "San Francisco",
    trade: [{
      tool: "Creative Suite", task: "Illustrator and Photoshop Hacker",
      training: "School / Hueristic"},
      {tool: "Motion5 Animation Studio", task: "Animation Hacker", training: "Hueristic / On the Job"},
      {tool: "Ruby on Rails", task: "Full-Stack Prototypes (Favorite Stack)", training: "School"},
      {tool: "Node | JS | Express (MEN Stack)", task: "Full-Stack Prototype Creator", training: "School"},
      {tool: "Node | Angular | JS (MEAN Stack)", task: "Full-Stack Prototypes w/ Forms", training: "School"},
      {tool: "FINALCUT PRO | videography", task: "Video producer from shooting to final edits", training: "On the Job / School"},
      {tool: "HTML5 | CSS", task: "Front-End Hacker who prioritizes Continuity", training: "School / On the Job"},
      {tool: "Python | Pandas | Flask", task:"Picked up Python to fix curiosity on how data can drive design", training: "Part-time intro course"}]
  });
});

// get all photos
app.get('/api/photos', function api_photos(req, res, next){
  ////sends all photos as json request
  db.Photo.find(function (err, photos){
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send(photos);
    }
  });
});


// process.env.PORT ||
// SERVER START
app.listen(process.env.PORT || 3000, function () {
  console.log('Info beaming @ http://localhost:3000/');
});
