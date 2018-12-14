import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, number, select } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'

import { ProgressBar } from '..'
import GlobalStyle from '../../Styles/Global'


const modeOptions = {
	Determinate: 'determinate', 
	Indeterminate: 'indeterminate', 
}

const rangeOptions = {
	range: true,
	min: 0,
	max: 100,
	step: 1,
 }

storiesOf('ProgressBar', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('Normal', () => 
		<Fragment>
			<GlobalStyle />
			<ProgressBar 
				width={number('Width', 320)}
				value={number('Value', 50, rangeOptions)}
				mode={select('Mode', modeOptions, 'determinate')}
			/>
		</Fragment>
	)
