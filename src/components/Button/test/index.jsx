import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'

import Button from '../Button.jsx'

test('Button component mounts properly', t => {
    const component = <Button type="solid">Click Me!</Button>
    const tree = render.create(component).toJSON()
    t.snapshot(tree)
})