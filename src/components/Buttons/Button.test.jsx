import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

test('Button component mounts properly', () => {
    const wrapper = renderer.create(
        <Button onClick={ () => {alert('clicked!');} } type="solid">Click Me!</Button>
    );
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
});