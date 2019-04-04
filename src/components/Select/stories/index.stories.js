import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, object, color, text, boolean } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'

import { Select } from '..'
import GlobalStyle from '../../Styles/Global'

const options = [
  { value: 'Singapore', label: '🇸🇬 Singapore' },
  { value: 'Canada', label: '🇨🇦 Canada' },
  { value: 'United States', label: '🇺🇸 United States' },
  { value: 'United Kingdom', label: '🇬🇧 United Kingdom' }
];

storiesOf('Select', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('Normal', () => 
		<Fragment>
			<GlobalStyle />
			<Select 
				icon={text('Icon', 'keyboard_arrow_down')}
				colour={color('Colour', '#414142')} 
				isMulti={boolean('Multi Select', false)}
				isClearable={boolean('Clearable', false)}
				isDisabled={boolean('Disabled', false)}
				isSearchable={boolean('Searchable', false)}
				isLoading={boolean('Loading', false)}
				options={object('Options', options)}
			/>
		</Fragment>
	)