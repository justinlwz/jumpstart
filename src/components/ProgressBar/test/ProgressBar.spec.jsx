import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'

import { ProgressBar } from '..'

test('ProgressBar component', t => {
  const component = <ProgressBar />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})