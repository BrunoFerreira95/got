window.jQuery = require('jquery'); // not sure if you need this at all
window.Bootstrap = require('bootstrap');

var buttonElement = document.querySelector('#form button')
var latitudeElement = document.querySelector('#form #latitude')
var longitudeElement = document.querySelector('#form #longitude')
var map 
var markerplus
var marker

buttonElement.onclick = enviarCoordenadas;

function enviarCoordenadas(){
    markerplus = new google.maps.LatLng(latitudeElement.value,longitudeElement.value),
    latitudeElement.value = '';
    longitudeElement.value = '';
    map.setCenter(markerplus);
    marker = new google.maps.Marker({position: markerplus, map: map});
}

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(-22.97595702,-49.86549228),
      zoom:17,
    };

    map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    map.addListener('click', function(e) {
      placeMarkerAndPanTo(e.latLng, map);
      console.log(e)
    });
    
}

google.maps.event.addDomListener(window, 'load', myMap);

function placeMarkerAndPanTo(latLng, map) {
  marker = {
    position: latLng,
    map: map
  }
  latitudeElement.value = latLng.lat();
  longitudeElement.value = latLng.lng();
  map.panTo(latLng);
}
