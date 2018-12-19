import React from 'react';
import { createMount } from '@material-ui/core/test-utils';

import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('should not crash', () => {
    const shallow = createMount();
    const wrapper = shallow(<NotFound />);
    expect(wrapper.text()).toEqual('404 not found');
  });
});
