function initMap() {
    
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5.5,
        center: {
            lat: 55.3617609,
            lng: -3.4433238
        }
    });
    
    var bounds = new google.maps.LatLngBounds();
    
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
 
    // array of castles for markers
    var castles = [{
        'windsorcastle': {
            longitude: 51.483860,
            latitude: -0.606490
        },
        'leedscastle': {
            longitude: 51.248844,
            latitude: 0.630249
        },
        'dovercastle': {
            longitude: 51.129524,
            latitude: 1.321235
        },
        'warwickcastle': {
            longitude: 52.279472,
            latitude: -1.585041
        },
        'bodiamcastle': {
            longitude: 51.001728,
            latitude: 0.543282
        },
        'lincolncastle': {
            longitude: 53.234745,
            latitude: -0.540397
        },
        'durhamcastle': {
            longitude: 54.77546,
            latitude: -1.576635
        },
        'ludlowcastle': {
            longitude: 52.36722,
            latitude: -2.722394
        },
        'edinburghcastle': {
            longitude: 55.948814,
            latitude: -3.200283
        },
        'braemarcastle': {
            longitude: 57.014683,
            latitude: -3.391364
        },
        'balmoralcastle': {
            longitude: 57.04142,
            latitude: -3.228998
        },
        'blaircastle': {
            longitude: 56.77357,
            latitude: -3.857812
        },
        'inveraraycastle': {
            longitude: 56.23773,
            latitude: -5.073967
        },
        'cawdorcastle': {
            longitude: 57.524105,
            latitude: -3.925715
        },
        'eileandonancastle': {
            longitude: 57.274677,
            latitude: -5.513736
        },
        'dunnottarcastle': {
            longitude: 56.945793,
            latitude: -2.200614
        },
        'conwycastle': {
            longitude: 53.280052,
            latitude: -3.825447
        },
        'pembrokecastle': {
            longitude: 51.676678,
            latitude: -4.91993
        },
        'carregcennencastle': {
            longitude: 51.856617,
            latitude: -3.93721
        },
        'harlechcastle': {
            longitude: 52.859726,
            latitude: -4.108152
        },
        'caerphillycastle': {
            longitude: 51.57615,
            latitude: -3.220367
        },
        'penrhyncastle': {
            longitude: 53.225117,
            latitude: -3.220367
        },
        'cardiffcastle': {
            longitude: 51.48149,
            latitude: -3.180798
        },
        'chepstowcastle': {
            longitude: 51.64453,
            latitude: -2.673271
        },
        'belfastcastle': {
            longitude: 54.64268,
            latitude: -5.942325
        },
        'carrickferguscastle': {
            longitude: 54.713737,
            latitude: -5.806532
        },
        'glenarmcastle': {
            longitude: 54.96765,
            latitude: -5.959837
        },
        'dunlucecastle': {
            longitude: 55.212536,
            latitude: -6.575105
        },
        'cromcastle': {
            longitude: 54.182605,
            latitude: -7.36255
        },
        'enniskillencastle': {
            longitude: 54.34579,
            latitude: -7.643679
        },
        'hillsboroughcastle': {
            longitude: 54.46123,
            latitude: -6.085229
        },
        'hillsboroughcastle': {
            longitude: 54.4608,
            latitude: -6.3294
        },
        
    }];
    
    // loop through markers
    for( i = 0; i < castles.length; i++ ){
        addMarker("The lat is " + castles[i][0]+" and the long is "+ castles[i][1]);
}
    // function to show markers on map
    function addMarker(marks){
        var marker = new google.maps.Marker({
        position: marks.castles,
        map: map
    });
    }
    
}