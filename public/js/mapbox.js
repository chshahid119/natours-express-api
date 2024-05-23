/* eslint-disable */

console.log('Hello from the client side :D');

// COMMENTED it because of Error in mapbox implementation

// const locations = JSON.parse(document.getElementById('map').dataset.locations);
// console.log(locations);

// mapboxgl.accessToken =
//   'pk.eyJ1Ijoic2hhaGlkMTE5IiwiYSI6ImNsd2prenMyOTB4a2cybWt4ZTA3M2l0bXMifQ.BM55RVtOEEL6XJ8KMvue0w';
// const map = new mapboxgl.Map({
//   container: 'map', // container ID
//   style: 'mapbox://styles/mapbox/streets-v12', // style URL
//   scrollZoom: false
//   //   center: [-74.5, 40], // starting position [lng, lat]
//   //   zoom: 4 // starting zoom
//   // intereactiveL: false
// });

// const bounds = new mapboxgl.LngLatBounds();

// locations.forEach(loc => {
//   // Create marker
//   const el = document.createElement('div');
//   el.className = 'marker';

//   // Add marker
//   new mapboxgl.Marker({
//     element: el,
//     anchor: 'bottom'
//   })
//     .setLngLat(loc.coordinates)
//     .addTo(map);

//   // Add popup
//   new mapboxgl.Popup({
//     offset: 30
//   })
//     .setLngLat(loc.coordinates)
//     .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
//     .addTo(map);

//   // Extend map bounds to include current location
//   bounds.extend(loc.coordinates);
// });

// map.fitBounds(bounds, {
//   padding: {
//     top: 200,
//     bottom: 150,
//     lefft: 100,
//     right: 100
//   }
// });
