const mapboxgl = require('mapbox-gl')

function buildMarker(type, coordinatesArr){
    const domElement = document.createElement('div')
    domElement.style.width = "32px"
    domElement.style.height = "39px"
    if(type.toLowerCase() === 'activity'){
        domElement.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'
    } else if ( type.toLowerCase() === 'hotel'){
        domElement.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)'
    } else {
        domElement.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)'
    }

    return new mapboxgl.Marker(domElement).setLngLat(coordinatesArr)

}

module.exports = buildMarker
