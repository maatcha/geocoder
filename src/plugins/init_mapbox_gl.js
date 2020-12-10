import { myApiKey } from '../plugins/my_api_key.js';

const displayMap = () => {
	const longitude = document.querySelector("#longitude").innerText;
	const latitude = document.querySelector("#latitude").innerText;
	
	mapboxgl.accessToken = myApiKey;

	const map = new mapboxgl.Map({
	  container: 'map',
	  style: 'mapbox://styles/mapbox/streets-v9',
	  center: [ `${parseFloat(longitude)}`, `${parseFloat(latitude)}` ],
	  zoom: 18
	});
	return map;

	// const el = document.createElement('div');
 //  el.className = 'marker';
 
 // 	new mapboxgl.Marker(el)
 //    .setLngLat(marker.geometry.coordinates)
 //    .addTo(map);
}

export { displayMap };








//ANCIENT CODE


// import mapboxgl from 'mapbox-gl';
// import { myApiKey } from './my_api_key.js'

// mapboxgl.accessToken = myApiKey;

// const longitude = document.querySelector("#longitude");
// const latitude = document.querySelector("#latitude");

// const map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v9',
//   center: [ `${parseInt(latitude, 10)}`, `${parseInt(longitude, 10)}` ],
//   zoom: 12
// });