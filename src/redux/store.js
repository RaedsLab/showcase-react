import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/root';

const initialState = {
  planets: {
    list: [], // array
    error: null,
    isLoading: false
  },
  descriptions: {
    list: {}, // hashmap
    error: null,
    isLoading: false
  }
};
const enhancers = [];
const middleware = [thunk];

let composedEnhancers;

if (process.env.NODE_ENV === 'development') {
  composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware),
    ...enhancers
  );
} else {
  composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );
}

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
