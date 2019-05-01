function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5.5,
        center: {
            lat: 55.3617609,
            lng: -3.4433238
        }
    });
    
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}