import React from 'react';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import Description from './Description';

describe('<Description />', () => {
  it('should not crash', () => {
    const mount = createMount();
    const props = {
      planet: 'Earth',
      descriptions: { list: { Earth: 'Something' } }
    };

    const wrapper = mount(<Description {...props} />);
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('should render with default message', () => {
    const mount = createMount();
    const props = {
      planet: '',
      descriptions: { Earth: 'Something' }
    };

    const wrapper = mount(<Description {...props} />);
    expect(wrapper.find('.default-description')).toHaveLength(1);
  });
});
