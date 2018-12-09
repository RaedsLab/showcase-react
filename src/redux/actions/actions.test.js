import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import expect from 'expect';
import * as actions from './actions';

import { rawData } from '../../__mocks__/rawData';
import { wikiData } from '../../__mocks__/wikiData';

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
    const error = {
      response: {
        status: 0
      }
    };
    mockAxios.get.mockImplementationOnce(() => Promise.reject(error));
    const expectedActions = [
      { type: actions.GET_PLANETS_REQUEST },
      { type: actions.GET_PLANETS_ERROR, error }
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

describe('actions > getDescription', () => {
  it('creates GET_DESCRIPTION_SUCCESS after after successfuly fetching data', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: wikiData
      })
    );
    const expectedActions = [
      { type: actions.GET_DESCRIPTION_REQUEST },
      { type: actions.GET_DESCRIPTION_SUCCESS, data: wikiData, planet: 'Earth' }
    ];

    const store = mockStore({
      descriptions: {
        list: {}, // hashmap
        error: null,
        isLoading: false
      }
    });
    return store.dispatch(actions.getDescription('Earth')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates GET_DESCRIPTION_ERRROR in fetching data', () => {
    const error = {
      response: {
        status: 0
      }
    };
    mockAxios.get.mockImplementationOnce(() => Promise.reject(error));
    const expectedActions = [
      { type: actions.GET_DESCRIPTION_REQUEST },
      { type: actions.GET_DESCRIPTION_ERROR, error }
    ];

    const store = mockStore({
      descriptions: {
        list: {}, // hashmap
        error: null,
        isLoading: false
      }
    });
    return store.dispatch(actions.getDescription('Earth')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
