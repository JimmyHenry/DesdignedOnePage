
function initMap() {
      var uluru = {lat: 48.926573, lng: 2.500635};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
