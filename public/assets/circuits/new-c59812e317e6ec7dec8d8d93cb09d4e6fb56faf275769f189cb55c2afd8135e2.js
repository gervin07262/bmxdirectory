$('document').ready(function() {
  initMap([{}]);
  $('#address').blur(function() {
    setNewLocation();
  });
})
;
