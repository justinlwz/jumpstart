import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'

import { Button } from '..'



storiesOf('Button', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('Normal', () => 
		<Button type="solid" onClick={action('clicked')}>Hello Button</Button>
	)
	.add('Disabled', () => 
		<Button type="solid" onClick={action('clicked')} disabled>Hello Button</Button>
	)
