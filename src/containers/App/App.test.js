import ConnectedApp, { App } from './App';
import React from 'react';
import { createMount, createShallow } from '@material-ui/core/test-utils';

describe('<App />', () => {
  it('should not crash', () => {
    const shallow = createMount();
    const props = {
      classes: {},
      planets: {
        list: [],
        error: null,
        isLoading: false
      },
      descriptions: {
        list: {}, // hashmap
        error: null,
        isLoading: false
      },
      getPlanets: jest.fn(x => []),
      getDescription: jest.fn(x => {}),
      onDialogClose: jest.fn(x => {})
    };

    const wrapper = shallow(<App {...props} />);
  });

  it('onOrbitChange should not be caled', () => {
    const shallow = createMount();
    const props = {
      classes: {},
      planets: {
        list: [],
        error: null,
        isLoading: false
      },
      descriptions: {
        list: { Earth: 'something' }, // hashmap
        error: null,
        isLoading: false
      },
      getPlanets: jest.fn(x => []),
      getDescription: jest.fn(x => {}),
      onDialogClose: jest.fn(x => {})
    };

    const wrapper = shallow(<App {...props} />);
  });

  it('ConnectedApp should not crash', () => {
    const shallow = createShallow();
    const props = {
      classes: {},
      planets: {
        list: [],
        error: null,
        isLoading: false
      },
      descriptions: {
        list: {}, // hashmap
        error: null,
        isLoading: false
      },
      getPlanets: jest.fn(x => []),
      getDescription: jest.fn(x => {}),
      onDialogClose: jest.fn(x => {})
    };

    shallow(<ConnectedApp {...props} />);
  });
});
