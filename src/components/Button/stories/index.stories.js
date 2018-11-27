import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';

import { Button } from '..';

storiesOf('Button', module)
	.addDecorator(centered)
	.add('Normal', () => (
		<Button type="solid" onClick={action('clicked')}>Hello Button</Button>
	))
	.add('Link', () => (
		<Button type="solid" href="http://google.com/" target="_blank" onClick={action('clicked')}>Hello Button</Button>
	))
	.add('Disabled', () => (
		<Button type="solid" onClick={action('clicked')} disabled>Hello Button</Button>
	))
