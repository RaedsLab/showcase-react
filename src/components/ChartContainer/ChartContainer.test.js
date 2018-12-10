import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import ChartContainer from './ChartContainer';
import Loading from '../Loading/Loading';
import { Chart as GoogleChart } from 'react-google-charts';

describe('<ChartContainer />', () => {
  it('should not crash', () => {
    const shallow = createShallow();
    const props = {
      data: [],
      isLoading: false
    };
    const wrapper = shallow(<ChartContainer {...props} />);
    expect(wrapper.find(GoogleChart)).toBeDefined();
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
