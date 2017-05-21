$('document').ready(function() {
  initMapEditForm();
  $('#address').blur(function() {
    setNewLocation();
  });
})
