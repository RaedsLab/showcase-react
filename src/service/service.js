import axios from 'axios';

export function fecthNearEarthObjects() {
  return get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY');
}

export function fetchPlanetInfo(planet) {
  // cross-anywhere is used to allow crossdimain (sacrifising performance)
  return get(
    `https://cors-anywhere.herokuapp.com/en.wikipedia.org/w/api.php?action=opensearch&limit=1&format=json&search=${planet}`
  );
}

function get(URL) {
  return axios.get(URL).then(reposne => reposne.data);
}
