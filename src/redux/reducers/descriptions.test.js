import reducer from './descriptions';
import * as actions from '../actions/actions';
import { wikiData } from '../../__mocks__/wikiData';

describe('descriptions reducer', () => {
  it('should handle GET_DESCRIPTION_REQUEST', () => {
    expect(
      reducer(
        {
          list: {},
          error: null,
          isLoading: false
        },
        {
          type: actions.GET_DESCRIPTION_REQUEST
        }
      )
    ).toEqual({
      list: {},
      error: null,
      isLoading: true
    });
  });
  it('should handle GET_DESCRIPTION_SUCCESS', () => {
    expect(
      reducer(
        {
          list: {},
          error: null,
          isLoading: true
        },
        {
          type: actions.GET_DESCRIPTION_SUCCESS,
          data: wikiData,
          planet: 'Earth'
        }
      )
    ).toEqual({
      list: { Earth: wikiData[2][0] },
      error: null,
      isLoading: false
    });
  });
});
it('should handle GET_DESCRIPTION_ERROR', () => {
  expect(
    reducer(
      {
        list: [],
        error: null,
        isLoading: true
      },
      {
        type: actions.GET_DESCRIPTION_ERROR,
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
