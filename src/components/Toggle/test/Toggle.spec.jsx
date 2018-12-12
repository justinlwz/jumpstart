import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'

import { Toggle } from '..'

test('Toggle component', t => {
    const component = <Toggle label='Toggle'/>
    const tree = render.create(component).toJSON()
    t.snapshot(tree)
})