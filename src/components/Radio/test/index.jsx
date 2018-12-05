import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'

import { Radio } from '..'

test('Radio component mounts properly', t => {
    const component = <Radio label='Choice 1'/>
    const tree = render.create(component).toJSON()
    t.snapshot(tree)
})