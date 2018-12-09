import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import Header from './Header';
import Switch from '@material-ui/core/Switch';

describe('<Header />', () => {
  it('should not crash', () => {
    const mount = createMount();
    const props = {
      isNightMode: false,
      onNightModeToggle: jest.fn(x => console.log(x))
    };

    //const wrapper = shallow(<Header {...props} />);
    const component = mount(<Header {...props} />);

    component
      .find('input')
      .at(0)
      .simulate('change', { target: { checked: true } });

    expect(props.onNightModeToggle).toHaveBeenCalled();
  });
});
