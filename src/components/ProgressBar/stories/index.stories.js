import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'

import { ProgressBar } from '..'
import GlobalStyle from '../../Styles/Global'


const modeOptions = {
	Determinate: 'determinate', 
	Indeterminate: 'indeterminate', 
};

const rangeOptions = {
	range: true,
	min: 0,
	max: 100,
	step: 1,
 };

storiesOf('ProgressBar', module)
	.addDecorator(withInfo({
		header: false,
		styles: {
			button: {
				topRight: {
					top: 0,
					left: 0,
					right: 'initial',
					borderRadius: '0 0 5px 0',
				},
			}
		},
	}))
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
