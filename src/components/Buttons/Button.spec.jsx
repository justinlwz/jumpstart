import React from 'react';
import { mount } from 'enzyme';

import Button from './Button';

describe('<Button/>', () => {
    it('Button component mounts the DOM and renders properly', () => {
        const wrapper = mount(
            <Button onClick={() => { alert('clicked!'); }} type="solid">Click Me!</Button>
        );

        expect(wrapper.length).toBe(1);
    });
});