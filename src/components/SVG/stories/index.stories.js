import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'

import { InlineSVG, SpriteSVG } from '..'
import icon from './apple.svg'
import sprite from './payment-sprite.svg'


storiesOf('SVG', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('Inline', () => 
		<Fragment>
			<GlobalStyle />
			<InlineSVG 
				src={icon}
			/>
		</Fragment>
	)
	.add('Sprite', () => 
		<Fragment>
			<GlobalStyle />
			<SpriteSVG 
				vBoxWidth={48} 
				vBoxHeight={48} 
				src={sprite} 
				icon="visa-dark" 
				style={{
					width: '100px',
					height: '60px'
				}}
			/>
		</Fragment>
  )
  