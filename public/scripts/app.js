console.log(" Sanity check - Multiphoton Ionization from the inner orbitals -> for ro-vibrational levels of an excited electronic state");

var template;
var $photosList;
var allPhotos = [];

$(document).ready(function(){
  $photosList = $('#photoTarget');
  // compile handlebars template
  var source = $('#photos-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/photos',
    success: handleSuccess,
    error: handleError
  });

  // new photo form
  // delete photo
  // update photo with comment

  // helper function to render all posts to view
  // note: we empty and re-render the collection each time our post data changes
  function render () {
    // empty existing posts from view
    $photosList.empty();
    // pass photos into the template function
    var photosHtml = template({ photos: allPhotos });
    // append html to the view
    $photosList.append(photosHtml);
  }

  function handleSuccess(json) {
    console.log('Transmitting Photon Gallery');
    allPhotos = json;
    render();
  }

  function handleError(err) {
    if (res.headersSent) {
      return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
  };
  // new photo success
  // new photo error
  // delete photo success
  // delete photo error
});
