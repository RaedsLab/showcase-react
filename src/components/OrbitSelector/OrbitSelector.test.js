import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import OrbitSelector from './OrbitSelector';
import MenuItem from '@material-ui/core/MenuItem';

describe('<OrbitSelector />', () => {
  it('should not crash', () => {
    const mount = createMount();
    const props = {
      selectedOrbit: '',
      orbits: ['Earth'],
      onOrbitChange: jest.fn(x => x)
    };

    const component = mount(<OrbitSelector {...props} />);

    component.find('[role="button"]').simulate('click');
    component
      .find(MenuItem)
      .at(0)
      .simulate('click');

    expect(props.onOrbitChange).toHaveBeenCalled();
  });
});
