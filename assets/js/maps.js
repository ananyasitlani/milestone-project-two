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
    
    var castles = [
            ['windsorcastle', 51.483860, -0.606490],
            ['leedscastle', 51.248844, -0.630249],
            ['dovercastle', 51.129524, -1.321235],
            ['warwickcastle', 52.279472, -1.585041],
            ['bodiamcastle', 51.001728, 0.543282],
            ['lincolncastle', 53.234745, -0.540397],
            ['durhamcastle', 54.77546, -1.576635],
            ['ludlowcastle', 52.36722, -2.722394],
            ['edinburghcastle', 55.948814, -3.200283],
            ['braemarcastle', 57.014683, -3.391364],
            ['balmoralcastle', 57.04142, -3.228998],
            ['blaircastle', 56.77357, -3.857812],
            ['inveraraycastle', 56.23773, -5.073967],
            ['cawdorcastle', 57.524105, -3.925715],
            ['eileandonancastle', 57.274677, -5.513736],
            ['dunnottarcastle', 56.945793, -2.200614],
            ['conwycastle', 53.280052, -3.825447],
            ['pembrokecastle', 51.676678, -4.91993],
            ['carregcennencastle', 51.856617, -3.93721],
            ['harlechcastle', 52.859726, -4.108152],
            ['caerphillycastle', 51.57615, -3.220367],
            ['penrhyncastle', 53.225117, -3.220367],
            ['cardiffcastle', 51.48149, -3.180798],
            ['chepstowcastle', 51.64453, -2.673271],
            ['belfastcastle', 54.64268, -5.942325],
            ['carrickferguscastle', 54.713737, -5.806532],
            ['glenarmcastle', 54.96765, -5.959837],
            ['dunlucecastle', 55.212536, -6.575105],
            ['cromcastle', 54.182605, -7.36255],
            ['enniskillencastle', 54.34579, -7.643679],
            ['hillsboroughcastle', 54.46123, -6.085229],
            ['lurgancastle', 54.4608, -6.3294]
            
        ]
        
    
    // loop through markers
    for( i = 0; i < castles.length; i++ ){
        var marker = new google.maps.Marker({
        position: {lat: castles[i][1], lng: castles[i][2]},
        map: map
    });
} 

    document.getElementByClassName("castle").addEventListener("click", marker);
    
  
  
//     // // function to show markers on map
//     // function addMarker(marks){
//     //     var marker = new google.maps.Marker({
//     //     position: marks.castles,
//     //     map: map
//     // });
//     // }
    
}