import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import OrbitSelector from './OrbitSelector';

describe('<OrbitSelector />', () => {
  it('should not crash', () => {
    const shallow = createShallow();
    const props = {
      selectedOrbit: '',
      orbits: [],
      onOrbitChange: jest.fn(x => console.log(x))
    };

    const wrapper = shallow(<OrbitSelector {...props} />);
  });
});
