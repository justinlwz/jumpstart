import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'

import { TextField } from '..'

test('TextField component', t => {
  const component = <TextField />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})