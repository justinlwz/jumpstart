import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'

import { Checkbox } from '..'
import GlobalStyle from '../../Styles/Global'


storiesOf('Checkbox', module)
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
			<Checkbox 
				label={text('Label Text', 'Choice 1')}
				disabled={boolean('Disabled', false)}
				checked={boolean('Checked', false)}
				onChange={action('changed')}
			/>
		</Fragment>
	)
