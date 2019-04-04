import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'

import { Select } from '..'

const options = [
  { value: 'Canada', label: '🇨🇦 Canada' },
  { value: 'United States', label: '🇺🇸 United States' },
  { value: 'United Kingdom', label: '🇬🇧 United Kingdom' }
];

test('Select component', t => {
  const component = <Select icon="keyboard_arrow_down" options={options} />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})