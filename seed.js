var db = require('./models');



var photos_list = [
  {
  image: "images/goldengatebridgenitelight.png",
  type: "Film",
  location: "Golden Gate Bridge, SF",
  film_type: "ISO 400",
  settings: "f/2.0, 1/20 ",
  camera: "Cannon AE-1 Program / 50mm",
  description: "Late night lights"
  },
  {
  image: "images/prstepsbeachwaves.png",
  type: "Film",
  location: "Rincon, Puerto Rico",
  film_type: "ISO 400",
  settings: "f/13.0, 1/200 ",
  camera: "Cannon AE-1 Program / 50mm",
  description: "Waves on steps beach in Rincon"
  },
  {
  image: "images/goldengatebridge.png",
  type: "Film",
  location: "San Francisco",
  film_type: "ISO 200",
  settings: "f/4.0, 1/150",
  camera: "Cannon AE-1 Program / 50mm",
  description: "Afternoon time crossing the bridge"
  },
  {
  image: "images/groundsrcc.png",
  type: "Film",
  location: "San Rafael, CA",
  film_type: "ISO 200",
  settings: "f/3.0, 1/300",
  camera: "Cannon AE-1 Program / 50mm",
  description: " "
  },
  {
  image: "images/srccfaucetwaterdrip.png",
  type: "Film",
  location: "San Rafael, CA",
  film_type: "ISO 200",
  settings: "f/2.0, 1/200",
  camera: "Cannon AE-1 Program / 50mm",
  description: "waves on steps beach in Rincon"
  },
  {
  image: "images/srcclongpostISO200.png",
  type: "Film",
  location: "San Rafael, CA",
  film_type: "ISO 100",
  settings: "f/5.5, 1/300",
  camera: "Cannon Program AE-1, 50mm",
  description: "Posts in docking yard"
  }
];
//////remove messy seeds
db.Photo.deleteMany({}, function(err, photos){
  if (err) {
    console.log("error occured in remove", err);
  } else {
    console.log('removed all photos');
    /////////create new records for photos
    db.Photo.create(photos_list, function(err, photos){
      if (err) {return console.log('error:', err); }
      console.log("created", photos.length, "photos");
      process.exit();
    });
  }
});
