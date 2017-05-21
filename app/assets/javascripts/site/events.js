function get_events () {
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: '/events-all',
    success: function(events) {
      initMap(events);
    }
  });
}

$('document').ready(function() {
  get_events();
  $('#national').change(function() {
      filterEvents();
  });
  $('#international').change(function() {
      filterEvents();
  });
})
