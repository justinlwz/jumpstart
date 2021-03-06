import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'

import { Radio } from '..'
import GlobalStyle from '../../Styles/Global'

const labelPosition = {
	Left: 'left', 
	Right: 'right',
}

storiesOf('Radio', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('Single Radio', () => 
		<Fragment>
			<GlobalStyle />
			<Radio 
				id={text('ID', 'GroupA')}
				label={text('Label Text', 'Choice 1')}
				labelPosition={select('Label Position', labelPosition, 'right')}
				checked={boolean('Checked', false)}
				disabled={boolean('Disabled', false)}
				debug={boolean('Debug', false)}
				onChange={action('changed')}
			/>
		</Fragment>
	)
	.add('Radio Group', () => 
		<Fragment>
			<GlobalStyle />
			<Radio 
				id='choice-a'
				name='group-a'
				label='Choice 1'
				onChange={action('changed')}
			/>
			<Radio 
				id='choice-b'
				name='group-a'
				label='Choice 2'
				onChange={action('changed')}
			/>
		</Fragment>
	)