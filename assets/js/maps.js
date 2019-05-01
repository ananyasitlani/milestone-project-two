function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5.5,
        center: {
            lat: 55.3617609,
            lng: -3.4433238
        }
    });
    
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    var castles = [
        { lat: 51.483860, lng: -0.606490 },
        { lat: 51.248844, lng: 0.630249},
        { lat: 51.129524, lng: 1.321235},
        { lat: 52.279472, lng: -1.585041},
        { lat: 51.001728, lng: 0.543282},
        { lat: 53.234745, lng: -0.540397},
        { lat: 54.77546, lng: -1.576635},
        { lat: 52.36722, lng: -2.722394},
        { lat: 55.948814, lng: -3.200283},
        { lat: 57.014683, lng: -3.391364},
        { lat: 57.04142, lng: -3.228998},
        { lat: 56.77357, lng: -3.857812},
        { lat: 56.23773, lng: -5.073967},
        { lat: 57.524105, lng: -3.925715},
        { lat: 57.274677, lng: -5.513736},
        { lat: 56.945793, lng: -2.200614},
        { lat: 53.280052, lng: -3.825447},
        { lat: 51.676678, lng: -4.91993},
        { lat: 51.856617, lng: -3.93721},
        { lat: 52.859726, lng: -4.108152},
        { lat: 51.57615, lng: -3.220367},
        { lat: 53.225117, lng: -4.094073},
        { lat: 51.48149, lng: -3.180798},
        { lat: 51.64453, lng: -2.673271},
        { lat: 54.64268, lng: -5.942325},
        { lat: 54.713737, lng: -5.806532},
        { lat: 54.96765, lng: -5.959837},
        { lat: 55.212536, lng: -6.575105},
        { lat: 54.182605, lng: -7.36255},
        { lat: 54.34579, lng: -7.643679},
        { lat: 54.46123, lng: -6.085229},
        { lat: 54.4608, lng: -6.3294}
    ];
    
    var markers = castles.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
        
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}