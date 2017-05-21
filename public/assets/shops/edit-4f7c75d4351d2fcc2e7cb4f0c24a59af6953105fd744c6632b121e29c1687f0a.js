$('document').ready(function() {
  var shop = [
    {
      name: $('#shop_name').val(),
      location_x: $('#latitude').val(),
      location_y: $('#longitude').val(),
      web: $('#shop_web').val()
    }
  ];
  initMap(shop);
  $('#address').blur(function() {
    setNewLocation();
  });
})
;
