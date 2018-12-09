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

    Object.defineProperty(window.location, 'reload', {
      configurable: true
      // writable: true,
    });
    window.location.reload = jest.fn();
    expect(window.location.reload).not.toHaveBeenCalled();

    component
      .find(Button)
      .at(0)
      .simulate('click');
    expect(window.location.reload).toHaveBeenCalled();
    window.location.reload.mockRestore();
  });
});
