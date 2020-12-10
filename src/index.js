import { adressAutoComplete } from './modules/adress_auto_complete.js';
import { findGps } from './modules/find_gps.js'
// import { displayMap } from './modules/find_gps.js'

document.querySelector("#adress")
	.addEventListener('keyup', adressAutoComplete);

document.querySelector("#adress-searchform")
	.addEventListener('submit', findGps);