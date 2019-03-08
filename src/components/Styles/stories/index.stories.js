import React, { Fragment } from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import GlobalStyle from '../Global'
import { CenterGrid, FlexContainer, FlexItems } from '../StyleUtils/Grids.style'


const TestGrid = styled(CenterGrid)`
	font-size: 12px;
	color: #666666;
	text-align: center;
	line-height: 200px
	background-color: rgba(222, 219, 211, 0.7);
	outline: solid 1px hsla(45, 14%, 95%, 20%);
	> * {
			padding: 10px;
			background-color: rgba(222, 219, 211, 0.7);
			outline: solid 1px hsla(45, 14%, 95%, 20%);
	}
`

storiesOf('Layouts', module)
	.addDecorator(withKnobs)
	.add('Center Grid', () => 
		<Fragment>
			<GlobalStyle />
			<TestGrid maxWidth='800px'>
				Center Layout Grid
			</TestGrid>
		</Fragment>
	)