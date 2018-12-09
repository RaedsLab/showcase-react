import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Description from './Description';

describe('<Description />', () => {
  it('should not crash', () => {
    const shallow = createShallow();
    const props = {
      planet: 'Earth',
      descriptions: { Earth: 'Something' }
    };

    const wrapper = shallow(<Description {...props} />);
  });
});
