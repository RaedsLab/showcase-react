import {
  GET_DESCRIPTION_ERROR,
  GET_DESCRIPTION_REQUEST,
  GET_DESCRIPTION_SUCCESS
} from '../actions/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DESCRIPTION_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case GET_DESCRIPTION_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    case GET_DESCRIPTION_SUCCESS:
      if (action.data && action.data[2] && action.data[2][0]) {
        const description = action.data[2][0];
        return {
          list: { ...state.list, [action.planet]: description },
          error: null,
          isLoading: false
        };
      }
      // error
      console.error('Response format error:', action.data);
      return {
        ...state,
        error: 'Response format error',
        isLoading: false
      };

    default:
      return state;
  }
};
