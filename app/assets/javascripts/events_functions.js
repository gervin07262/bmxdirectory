var containerEvents = $('#container-events');
function filterEvents () {
  var obj = {};
  var nationals = $('#nationals option:selected').val();
  var internationals = $('#internationals option:selected').val();
  if (nationals!="")
    obj['nationals'] = nationals;
  if (internationals!="")
    obj['internationals'] = internationals;

  $.ajax({
    type: 'POST',
    data: {filter: JSON.stringify(obj)},
    url: '/events-filter',
    success: showElementsFiltersEvents,
    error: function(error) {
      console.log(error);
    }
  });
}

function showElementsFiltersEvents (events) {
  initMap(events);
  containerEvents.empty();
  $.each(events, function(index, value) {
    addElementFiltersEvents(value);
  });
}

function addElementFiltersEvents(value) {
  var elementHtml = `
    <div class="item-content col-md-6">
        <h2>${value.name}</h2>
        <p><strong>Vestuario: </strong> ${dressingRooms}</p>
        <p><strong>Precio:</strong> ${value.price} €</p>
        <p><strong>Horario:</strong> L -V 09:00 - 14:00, 17:00 - 21:00; Sábado 09:00 - 15:00</p>
        <p><strong>Clases de Entrenamiento:</strong> ${trainingClasses}</p>
    </div>
  `;
  containerEvents.append(elementHtml);
}
