import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import ChartContainer from './ChartContainer';
import Loading from '../Loading/Loading';

describe('<ChartContainer />', () => {
  it('should not crash', () => {
    const shallow = createShallow();
    const props = {
      data: [],
      isLoading: false
    };

    const wrapper = shallow(<ChartContainer {...props} />);
  });

  it('should show loading', () => {
    const shallow = createShallow();
    const props = {
      data: [],
      isLoading: true
    };

    const wrapper = shallow(<ChartContainer {...props} />);

    expect(wrapper.find(Loading)).toBeDefined();
  });
});
