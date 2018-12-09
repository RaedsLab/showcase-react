import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import expect from 'expect';
import * as actions from './actions';
import { rawData } from '../../__mocks__/rawData';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions > getPlanets', () => {
  it('creates GET_PLANETS_SUCCESS after after successfuly fetching data', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: rawData
      })
    );
    const expectedActions = [
      { type: actions.GET_PLANETS_REQUEST },
      { type: actions.GET_PLANETS_SUCCESS, data: rawData }
    ];

    const store = mockStore({
      planets: {
        list: [],
        error: null,
        isLoading: false
      }
    });
    return store.dispatch(actions.getPlanets()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GET_PLANETS_ERROR in fetching data', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject({
        error: 'message'
      })
    );
    const expectedActions = [
      { type: actions.GET_PLANETS_REQUEST },
      { type: actions.GET_PLANETS_ERROR, error: { error: 'message' } }
    ];

    const store = mockStore({
      planets: {
        list: [],
        error: null,
        isLoading: false
      }
    });
    return store.dispatch(actions.getPlanets()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
