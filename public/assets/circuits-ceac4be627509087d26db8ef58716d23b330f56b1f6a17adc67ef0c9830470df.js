var containerCircuits = $('#container-circuits');
function filterCircuits () {
  var obj = {};
  if ($('#dressing_rooms option:selected').val()!="") {
    obj['dressing_rooms'] = $('#dressing_rooms option:selected').val();
  }
  /*if ($('#price option:selected').val()!="") {
    obj['price'] = $('#price option:selected').val();
  }*/
  if ($('#training_classes option:selected').val()!="") {
    obj['training_classes'] = $('#training_classes option:selected').val();
  }

  $.ajax({
    type: 'POST',
    data: {filter: JSON.stringify(obj)},
    url: '/circuits-filter',
    success: showElementsFiltersCircuits,
    error: function(error) {
      console.log(error);
    }
  });
}

function showElementsFiltersCircuits (circuits) {
  initMap(circuits);
  containerCircuits.empty();
  $.each(circuits, function(index, value) {
    addElementFiltersCircuits(value);
  });
}

function addElementFiltersCircuits(value) {
  var dressing_rooms = (value.dressing_rooms == 1) ? 'Si' : 'No';
  var training_classes = (value.training_classes == 1) ? 'Si' : 'No';
  var elementHtml = `
    <div class="item-content">
        <h2>${value.name}</h2>
        <p><strong>Vestuario: </strong> ${dressing_rooms}</p>
        <p><strong>Precio:</strong> 6 €</p>
        <p><strong>Horario:</strong> L -V 09:00 - 14:00, 17:00 - 21:00; Sábado 09:00 - 15:00</p>
        <p><strong>Clases de Entrenamiento:</strong> ${training_classes}</p>
        <div class="post-meta"></div>
    </div>
  `;
  containerCircuits.append(elementHtml);
}
;
