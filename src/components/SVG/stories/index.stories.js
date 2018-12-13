import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';

import '../../Styles/normalize.scss';
import '../../Styles/global.scss';
import '../../Styles/typography.scss';
import '../../Styles/animate.scss';
import '../../Styles/icons.scss';

import { InlineSVG, SpriteSVG } from '..';
import icon from './apple.svg';
import sprite from './document-sprite.svg';


storiesOf('SVG', module)
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
	.add('Inline', () => 
		<InlineSVG 
			src={icon}
		/>
	)
	.add('Sprite', () => 
		<SpriteSVG 
			vBoxWidth={48} 
			vBoxHeight={48} 
			src={sprite} 
			icon="DraftCategory" 
			style={{
				width: '64px',
				height: '64px'
			}}
		/>
	)