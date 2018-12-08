import {
  GET_PLANETS_ERROR,
  GET_PLANETS_REQUEST,
  GET_PLANETS_SUCCESS
} from '../actions/actions';

import { getPlanetListFromNasaData } from '../../utils/formatter';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PLANETS_REQUEST:
      return {
        list: [],
        error: null,
        isLoading: true
      };

    case GET_PLANETS_ERROR:
      return {
        list: [],
        error: action.error,
        isLoading: false
      };

    case GET_PLANETS_SUCCESS:
      return {
        list: getPlanetListFromNasaData(action.data),
        error: null,
        isLoading: false
      };
    default:
      return state;
  }
};
