ymaps.ready(init)

function init() {
    var myMap = new ymaps.Map("map", {
        center: [57.046068, 54.007874],
        zoom: 16.5
    }, {
        searchControlProvider: 'yandex#search'
    })

    myPlacemark = new ymaps.Placemark([57.046068, 54.007874], {}, {
        preset: 'islands#redEducationIcon'
    });

    myMap.geoObjects.add(myPlacemark);

    myMap.controls.remove('geolocationControl')
    myMap.controls.remove('searchControl')
    myMap.controls.remove('trafficControl')
    myMap.controls.remove('typeSelector')
    // myMap.controls.remove('fullscreenControl')
    myMap.controls.remove('zoomControl')
    myMap.controls.remove('rulerControl')
}