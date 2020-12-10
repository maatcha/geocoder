import { myApiKey } from '../plugins/my_api_key.js';
import { displayMap } from '../plugins/init_mapbox_gl.js';

const displayGps = (data) => {
	const longitude = data.features[0].geometry.coordinates[0];
	const latitude = data.features[0].geometry.coordinates[1];
	const coordinates = document.querySelector('#coordinates');
	coordinates.innerHTML = '';
	coordinates.insertAdjacentHTML('beforeend', `<li id="longitude">${longitude}</li><li id="latitude">${latitude}</li>`);
	displayMap();
}

const fetchGps = (userEntry) => {
	const query = userEntry.value;
	fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${myApiKey}`)
		.then(response => response.json())
		.then(displayGps);
}

const findGps = (event) => {
	event.preventDefault();
	const userEntry = document.querySelector('#adress');
	fetchGps(userEntry);
}

export { findGps };