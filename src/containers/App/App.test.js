import ConnectedApp, { App } from './App';
import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

describe('<App />', () => {
  it('should not crash', () => {
    const shallow = createShallow();
    const props = {
      classes: {},
      planets: {
        list: [],
        error: null,
        isLoading: false
      },
      getPlanets: jest.fn(x => [])
    };

    const wrapper = shallow(<App {...props} />);

    wrapper.instance().onOrbitChange('Earth');
    expect(wrapper.instance().state.selectedOrbit).toBe('Earth');
    wrapper.instance().onNightModeToggle(true);
    expect(wrapper.instance().state.isNightMode).toBeTruthy();
  });
});
