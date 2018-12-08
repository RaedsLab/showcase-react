import axios from 'axios';

export function fecthNearEarthObjects() {
  const URL = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY';
  return axios.get(URL).then(reposne => reposne.data);
}
