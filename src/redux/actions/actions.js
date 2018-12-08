import { fecthNearEarthObjects } from '../../service/service';

export const GET_PLANETS_REQUEST = 'planets/GET_PLANETS';
export const GET_PLANETS_SUCCESS = 'planets/GET_PLANETS_SUCCESS';
export const GET_PLANETS_ERROR = 'planets/GET_PLANETS_ERROR';

export function getPlanets() {
  return dispatch => {
    dispatch({
      type: GET_PLANETS_REQUEST
    });
    fecthNearEarthObjects()
      .then(response => {
        dispatch({
          type: GET_PLANETS_SUCCESS,
          data: response
        });
      })
      .catch(error => {
        dispatch({
          type: GET_PLANETS_ERROR,
          error
        });
      });
  };
}
