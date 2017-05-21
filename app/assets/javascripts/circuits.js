var containerCircuits = $('#container-circuits');
function filterCircuits () {
  var obj = {};
  var dressingRooms = $('#dressing_rooms option:selected').val();
  var trainingClasses = $('#training_classes option:selected').val();
  if (dressingRooms!="")
    obj['dressing_rooms'] = dressingRooms;
  if (trainingClasses!="")
    obj['training_classes'] = trainingClasses;

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
  var dressingRooms = (value.dressing_rooms == 1) ? 'Si' : 'No';
  var trainingClasses = (value.training_classes == 1) ? 'Si' : 'No';
  var elementHtml = `
    <div class="item-content col-md-6">
        <h2>${value.name}</h2>
        <p><strong>Vestuario: </strong> ${dressingRooms}</p>
        <p><strong>Precio:</strong> ${value.price} €</p>
        <p><strong>Horario:</strong> L -V 09:00 - 14:00, 17:00 - 21:00; Sábado 09:00 - 15:00</p>
        <p><strong>Clases de Entrenamiento:</strong> ${trainingClasses}</p>
    </div>
  `;
  containerCircuits.append(elementHtml);
}
