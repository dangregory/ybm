// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=1de8b09e6bcd407e5715bde1deb13560

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '1de8b09e6bcd407e5715bde1deb13560';
const ACCOUNT_ID = '5d3c9cceede1b00013ebb5ca';
const SESSION_ID = '83f07355234af5efb80919f876a44bd4a102783d';
const REQUEST_TOKEN = '5fa1a32bb1c115ee49087a41cd17b4ac0c3eecee';

// Images
// An image URL looks like this example:
// http://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg

const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';

//Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export {
  API_URL,
  API_KEY,
  ACCOUNT_ID,
  SESSION_ID,
  REQUEST_TOKEN,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
}