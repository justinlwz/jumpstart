import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'

import { Checkbox } from '..'

test('Checkbox component', t => {
    const component = <Checkbox label='Choice 1'/>
    const tree = render.create(component).toJSON()
    t.snapshot(tree)
})