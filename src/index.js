const buildMarker = require('./marker')
const mapboxgl = require('mapbox-gl')
console.log('this is running')

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsY3J1c2VyIiwiYSI6ImNqOGJzYXhwNjAxYjEyd21zNmo0ZDFkdjMifQ._-QP_ORV7ZujTQT4FkaXUw'

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
  })

  const marker = buildMarker('activity', [-74.009151, 40.705086])
  marker.addTo(map);
  // const markerDomEl = document.createElement("div")
  // markerDomEl.style.width = "32px"
  // markerDomEl.style.height = "39px"
  // markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"

  // new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map)

