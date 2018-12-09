import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import ErrorDialog from './ErrorDialog';
import Button from '@material-ui/core/Button';

describe('<ErrorDialog />', () => {
  it('should not crash', () => {
    const mount = createMount();
    const props = {
      isOpen: true,
      message: 'message',
      onClose: jest.fn(x => x)
    };

    //const wrapper = shallow(<Header {...props} />);
    const component = mount(<ErrorDialog {...props} />);

    component
      .find(Button)
      .at(0)
      .simulate('click');

    expect(props.onClose).toHaveBeenCalled();
  });
});
