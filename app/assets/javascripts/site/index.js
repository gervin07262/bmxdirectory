function getCircuits () {
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: '/circuits-all',
    success: function(circuits) {
      initMap(circuits);
    }
  });
}

$('document').ready(function() {
  getCircuits();
  $('#dressing_rooms').change(function() {
      filterCircuits();
  });

  $('#price').change(function() {
    filterCircuits();
  });

  $('#training_classes').change(function() {
    filterCircuits();
  });
})
