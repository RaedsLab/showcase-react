import axios from "axios";

export const fecthNearEarthObjects = async (): Promise<object> => {
  try {
    const data = await get(
      "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY"
    );
    return data;
  } catch (error) {
    /**
     * 429 TOO MANY REQUESTS
     * https://httpstatuses.com/429
     * If NASA server is not responding, use local version of data
     *  */
    if (error.response && error.response.status === 429) {
      return get("/nasa.json");
    }
    return Promise.reject(error);
  }
};

export const fetchPlanetInfo = (planet: string): Promise<object> => {
  // cross-anywhere is used to allow crossdimain (sacrifising performance)
  return get(
    `https://cors-anywhere.herokuapp.com/en.wikipedia.org/w/api.php?action=opensearch&limit=1&format=json&search=${planet}`
  );
};

const get = async (URL: string): Promise<object> => {
  const reposne = await axios.get(URL);
  return reposne.data;
};
