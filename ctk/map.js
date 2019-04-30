function initMap() {
  // The location of Uluru
  var uluru = {lat: 36.234573, lng: -115.229449};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 20, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}