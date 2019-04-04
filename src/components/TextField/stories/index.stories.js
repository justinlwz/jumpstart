import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'

import { TextField } from '..'
import GlobalStyle from '../../Styles/Global'

storiesOf('ProgressBar', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('Normal', () => 
		<Fragment>
			<GlobalStyle />
			<TextField />
		</Fragment>
	)