function get_shops () {
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: '/shops-all',
    success: function(shops) {
      initMap(shops);
    }
  });
}

$('document').ready(function() {
  get_shops();
  $('#bicycle_sale').change(function() {
      filterShops();
  });
  $('#open_sunday_to_sunday').change(function() {
      filterShops();
  });
  $('#bicycle_rental').change(function() {
      filterShops();
  });
  $('#bicycle_repair').change(function() {
      filterShops();
  });
})
