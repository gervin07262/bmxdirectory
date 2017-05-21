$('document').ready(function() {
  var circuit = [
    {
      name: $('#circuit_name').val(),
      location_x: $('#latitude').val(),
      location_y: $('#longitude').val(),
      web: $('#circuit_web').val()
    }
  ];
  initMap(circuit);
  $('#address').blur(function() {
    setNewLocation();
  });
})
;
