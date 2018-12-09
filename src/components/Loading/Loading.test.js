import React from 'react';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import Loading from './Loading';

describe('<Loading />', () => {
  it('should not crash', () => {
    const mount = createShallow();

    const wrapper = mount(<Loading />);
  });
});
