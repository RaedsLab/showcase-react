import { fecthNearEarthObjects } from '../../service/service';

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
