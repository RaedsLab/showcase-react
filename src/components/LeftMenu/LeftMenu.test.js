import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import LeftMenu from './LeftMenu';

describe('<LeftMenu />', () => {
  it('should not crash', () => {
    const shallow = createShallow();
    const props = {
      selectedOrbit: '',
      orbits: [],
      onOrbitChange: jest.fn(x => console.log(x))
    };

    const wrapper = shallow(<LeftMenu {...props} />);
  });
});
