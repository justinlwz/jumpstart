import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'

import { Icon } from '..'

test('Icon component', t => {
  const component = <Icon />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})