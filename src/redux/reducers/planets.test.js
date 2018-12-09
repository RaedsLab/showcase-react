import reducer from './planets';
import * as actions from '../actions/actions';
import { getPlanetListFromNasaData } from '../../utils/formatter';
import { rawData } from '../../__mocks__/rawData';

describe('planet reducer', () => {
  it('should handle GET_PLANETS_REQUEST', () => {
    expect(
      reducer([], {
        type: actions.GET_PLANETS_REQUEST
      })
    ).toEqual({
      list: [],
      error: null,
      isLoading: true
    });
  });
  it('should handle GET_PLANETS_SUCCESS', () => {
    expect(
      reducer(
        {
          list: [],
          error: null,
          isLoading: true
        },
        {
          type: actions.GET_PLANETS_SUCCESS,
          data: rawData
        }
      )
    ).toEqual({
      list: getPlanetListFromNasaData(rawData),
      error: null,
      isLoading: false
    });
  });
});
it('should handle GET_PLANETS_ERROR', () => {
  expect(
    reducer(
      {
        list: [],
        error: null,
        isLoading: true
      },
      {
        type: actions.GET_PLANETS_ERROR,
        error: 'message'
      }
    )
  ).toEqual({
    list: [],
    error: 'message',
    isLoading: false
  });
});
it('should handle default action', () => {
  expect(
    reducer(
      {
        list: [],
        error: null,
        isLoading: false
      },
      {
        type: 'SOMETHING'
      }
    )
  ).toEqual({
    list: [],
    error: null,
    isLoading: false
  });
});
