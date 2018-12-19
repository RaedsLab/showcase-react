import React from 'react';
import { createMount } from '@material-ui/core/test-utils';

import About from './About';

describe('<About />', () => {
  it('should not crash', () => {
    const shallow = createMount();

    const wrapper = shallow(<About />);
    expect(wrapper.text()).toContain('@Raed667');
    expect(wrapper.find("a[href='https://twitter.com/raed667']")).toHaveLength(
      1
    );
  });
});
