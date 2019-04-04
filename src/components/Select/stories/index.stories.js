import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, object, color, text } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'

import { Select } from '..'
import GlobalStyle from '../../Styles/Global'

const options = [
  { value: 'Canada', label: '🇨🇦 Canada' },
  { value: 'United States', label: '🇺🇸 United States' },
  { value: 'United Kingdom', label: '🇬🇧 United Kingdom' }
];

storiesOf('Select', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('Normal', () => 
		<Fragment>
			<GlobalStyle />
			<Select 
				icon={text('Icon', 'keyboard_arrow_down')}
				colour={color('Colour', '#414142')} 
				options={object('Options', options)}
			/>
		</Fragment>
	)