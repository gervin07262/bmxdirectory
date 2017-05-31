//var mapCanvas = $('#map_canvas');
var filters = $('#form-filter-circuits > .row');
var itemsContainer = $('#container-circuits');
var main = $('main.main');
var header = $('header');

// Set effect classes to .animated elements
function animateInHeading() {
    var allAnimated = $('#heading-warapper .animated');

    allAnimated.each(function(index){
        if(index%2){
            $(this).addClass('bounceInRight');
        }else{
            $(this).addClass('bounceInLeft');
        }
    });
}

// Scroll window to element with timing [default 600ms]
function scrollTo(selector, timing = 600){
    $('html, body').animate({
        scrollTop: $(selector).offset().top
    }, timing);
}

// Resizes the main boxex
function resetSizes(){
    var winH = window.innerHeight;
    var maxCont = winH - filters.outerHeight() + 140;

    $('#map_canvas').height(winH);
    itemsContainer.css('max-height', maxCont + 'px');
}

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
  animateInHeading();
  resetSizes();

  $('#heading-search-button').on('click', function(){
      scrollTo('main.main')
  });
});
