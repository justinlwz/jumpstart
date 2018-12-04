import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'

import { Button } from '..'
import GlobalStyle from '../../Style/Global.style'

const typeOptions = {
	Normal: 'normal', 
	Quiet: 'quiet', 
	'No Effect': 'no-effect',
};

const radiusOptions = {
	range: true,
	min: 0,
	max: 5,
	step: 1,
 };

storiesOf('Button', module)
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
			<Button 
				type={select('Type', typeOptions, 'normal')}
				radius={number('Radius', 0, radiusOptions)}
				small={boolean('Small', false)}
				disabled={boolean('Disabled', false)}
				onClick={action('clicked')}
			>
				{text('Button Text', 'Button')}
			</Button>
		</Fragment>
	)
