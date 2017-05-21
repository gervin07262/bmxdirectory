/******************** part of shops.js *************************/

var containerShops = $('#container-shops');
function filterShops () {
  var obj = {};
  var bicycleSale = $('#bicycle_sale option:selected').val();
  var openSundayToSunday = $('#open_sunday_to_sunday option:selected').val();
  var bicycleRental = $('#bicycle_rental option:selected').val();
  var bicycleRepair = $('#bicycle_repair option:selected').val()
  if (bicycleSale!="")
    obj['bicycle_sale'] = bicycleSale;

  if (openSundayToSunday!="")
    obj['open_sunday_to_sunday'] = openSundayToSunday;

  if (bicycleRental!="")
    obj['bicycle_rental'] = bicycleRental;

  if (bicycleRepair!="")
    obj['bicycle_repair'] = bicycleRepair;

  $.ajax({
    type: 'POST',
    data: {filter: JSON.stringify(obj)},
    url: '/shops-filter',
    success: showElementsFiltersShops,
    error: function(error) {
      console.log(error);
    }
  });
}

function showElementsFiltersShops (shops) {
  initMap(shops);
  containerShops.empty();
  $.each(shops, function(index, value) {
    addElementFiltersShops(value);
  });
}

function addElementFiltersShops(value) {
  var bicycleSale = (value.bicycle_sale == 1) ? 'Si' : 'No';
  var bicycleRental = (value.bicycle_rental == 1) ? 'Si' : 'No';
  var bicycleRepair = (value.bicycle_repair == 1) ? 'Si' : 'No';
  elementHtml = `
  <div class="item-content col-md-6">
    <img src='http://lorempixel.com/200/200/sports/' size = '200' alt= 'Edit Entry' />
    <h2>${value.name}</h2>
    <p>${value.description}</p>
    <p><strong>Dirección: </strong> ${value.address}</p>
    <p><strong>Web:</strong> ${value.web}</p>
    <p><strong>Horario:</strong> ${value.horary}</p>
    <p><strong>Venta de Bicis:</strong>${bicycleSale}</p>
    <p><strong>Alquiler de Bicis:</strong>${bicycleRental}</p>
    <p><strong>Reparación de Bicis:</strong>${bicycleRepair}</p>
    <div class="clearfix"></div>
    <div class="post-meta"></div>
  </div>
  `;
  containerShops.append(elementHtml);
}
