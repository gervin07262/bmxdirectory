var map = new google.maps.Map( $('#map_canvas')[0], {
  zoom: 10,
  center: {lat: 40.416775, lng: -3.70379},
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var markers = [];

function initMap (ubications) {
  // Clear out the old markers.
  deleteMarkers()

  putMarkers(ubications);

  searchUbications();
}

function deleteMarkers () {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}

function putMarkers(ubications) {

  var locations = [];
  $.each(ubications, function(index, value) {
    locations.push([value.name, value.location_x, value.location_y, value.web]);
  });

  var infowindow = new google.maps.InfoWindow();

  var i;

  function markerInfo (marker, i) {
    return function() {
      infowindow.setContent(locations[i][0] + '<br>' + '<a href="' +
      locations[i][3] + '" target="_blank">'+ locations[i][3] + '</a>');
      infowindow.open(map, marker);
    }
  }

  for (var i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      animation: google.maps.Animation.DROP,
      map: map
    });
    markers.push(marker);
    google.maps.event.addListener(marker, 'click', markerInfo(marker,i));
  }
}



function searchUbications() {
  // Create the search box and link it to the UI element.
  var input = $('#address')[0];
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  searchBoxAddListener(searchBox);

}

function searchBoxAddListener (searchBox) {
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0)
      return;

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else
        bounds.extend(place.geometry.location);
    });
    map.fitBounds(bounds);
  });
}

function setNewLocation () {
  // initialize marker
  google.maps.event.addListener(map, "idle", function() {
    var latitude = map.getCenter().lat().toFixed(6);
  	var longitude = map.getCenter().lng().toFixed(6);
    $('#latitude').val(latitude);
    $('#longitude').val(longitude);
    google.maps.event.trigger(map, "resize");
  });
}
