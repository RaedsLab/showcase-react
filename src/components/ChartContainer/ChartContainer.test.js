import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import ChartContainer from './ChartContainer';

describe('<ChartContainer />', () => {
  it('should not crash', () => {
    const shallow = createShallow();
    const props = {
      data: []
    };

    const wrapper = shallow(<ChartContainer {...props} />);
  });
});
