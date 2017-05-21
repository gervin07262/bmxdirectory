function initMapEditForm () {
  var location = [
    {
      name: $('#name').val(),
      location_x: $('#latitude').val(),
      location_y: $('#longitude').val(),
      web: $('#web').val()
    }
  ];
  initMap(location);
}
