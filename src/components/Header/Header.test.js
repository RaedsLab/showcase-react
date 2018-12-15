import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { shape } from 'prop-types';

import Header from './Header';

describe('<Header />', () => {
  const router = {
    history: new BrowserRouter().history,
    route: {
      location: {},
      match: {}
    }
  };
  const createContext = () => ({
    context: { router },
    childContextTypes: { router: shape({}) }
  });

  it('should not crash', () => {
    const mount = createMount();
    const props = {
      isNightMode: false,
      onNightModeToggle: jest.fn(x => x)
    };

    //const wrapper = shallow(<Header {...props} />);
    const component = mount(<Header {...props} />, createContext());

    component
      .find('input')
      .at(0)
      .simulate('change', { target: { checked: true } });

    expect(props.onNightModeToggle).toHaveBeenCalled();
  });
});
