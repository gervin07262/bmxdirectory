var map = new google.maps.Map( document.getElementById('map_canvas'), {
  zoom: 10,
  center: {lat: 40.416775, lng: -3.70379},
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

function setLocations (map, ubications) {
  var locations = [];
  $.each(ubications, function(index, value) {
    locations.push([value.name, value.location_x, value.location_y, value.web]);
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

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
      map: map
    });

    google.maps.event.addListener(marker, 'click', markerInfo(marker,i));
  }
  searchUbications(map);
}

function searchUbications(map) {
  // Create the search box and link it to the UI element.
  var input = document.getElementById('address');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

function setNewLocation () {
  var latitude = map.getCenter().lat().toFixed(6);
	var longitude = map.getCenter().lng().toFixed(6);
	document.getElementById("latitude").value = latitude;
	document.getElementById("longitude").value = longitude;
}

function initMap (ubications) {
    setLocations(map,ubications);
}
;
