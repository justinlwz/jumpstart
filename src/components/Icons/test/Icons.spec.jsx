import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'

import { Icons } from '..'

test('Icon component', t => {
  const component = <Icons>android</Icons>
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})