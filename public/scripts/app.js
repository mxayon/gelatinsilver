console.log(" Sanity check - Multiphoton Ionization from the inner orbitals -> for ro-vibrational levels of an excited electronic state")

$(document).ready(function(){

  //api connect for temp data on server
  $.ajax({
  method: 'GET',
  url: '/api/cat',
  success: handleSuccess,
  error: handleError
  });

  $.ajax({
  method: 'GET',
  url: '/api/tacotruck',
  success: handleSuccess,
  error: handleError
  });


});
