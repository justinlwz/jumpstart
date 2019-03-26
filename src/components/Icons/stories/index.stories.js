import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, color } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'

import { Icons } from '..'
import GlobalStyle from '../../Styles/Global'

storiesOf('Icon', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('Normal', () => 
		<Fragment>
			<GlobalStyle />
			<Icons colour={color('Colour', '#a4c639')} size={number('Size', 40)}>
				{text('Icon', 'android')}
			</Icons>
		</Fragment>
	)