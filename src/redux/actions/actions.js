import { fecthNearEarthObjects, fetchPlanetInfo } from '../../service/service';

// PLANETS
export const GET_PLANETS_REQUEST = 'planets/GET_PLANETS';
export const GET_PLANETS_SUCCESS = 'planets/GET_PLANETS_SUCCESS';
export const GET_PLANETS_ERROR = 'planets/GET_PLANETS_ERROR';

export const getPlanets = () => dispatch => {
  dispatch({
    type: GET_PLANETS_REQUEST
  });
  return fecthNearEarthObjects()
    .then(response => {
      return dispatch({
        type: GET_PLANETS_SUCCESS,
        data: response
      });
    })
    .catch(error => {
      return dispatch({
        type: GET_PLANETS_ERROR,
        error
      });
    });
};

// DESCRIPTIONS
export const GET_DESCRIPTION_ERROR = 'descriptions/GET_DESCRIPTION_ERROR';
export const GET_DESCRIPTION_REQUEST = 'descriptions/GET_DESCRIPTION_REQUEST';
export const GET_DESCRIPTION_SUCCESS = 'descriptions/GET_DESCRIPTION_SUCCESS';

export const getDescription = planet => dispatch => {
  dispatch({
    type: GET_DESCRIPTION_REQUEST
  });
  return fetchPlanetInfo(planet)
    .then(response => {
      return dispatch({
        type: GET_DESCRIPTION_SUCCESS,
        planet,
        data: response
      });
    })
    .catch(error => {
      return dispatch({
        type: GET_DESCRIPTION_ERROR,
        error
      });
    });
};
