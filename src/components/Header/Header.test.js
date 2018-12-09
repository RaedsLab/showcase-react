import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Header from './Header';

describe('<Header />', () => {
  it('should not crash', () => {
    const shallow = createShallow();
    const props = {
      isNightMode: false,
      onNightModeToggle: jest.fn(x => console.log(x))
    };

    const wrapper = shallow(<Header {...props} />);
  });
});
