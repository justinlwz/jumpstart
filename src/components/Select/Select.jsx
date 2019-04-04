import React, { PureComponent } from 'react'
import ReactSelect, { components } from 'react-select'
import styled from 'styled-components'

import { IconStyle } from '../Icons/Icons.style'
import { grayD00 } from '../Styles/StyleUtils/Colours.style'

const SelectStyle = styled(ReactSelect)`
  .react-select__control {
    min-width: 320px;
    max-width: 400px;
    min-height: 48px;
    border-radius: 0;
    border-color: ${grayD00};
  }
`

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <IconStyle 
      colour={props.selectProps.colour} 
    >
      {props.selectProps.icon}
    </IconStyle>
  </components.DropdownIndicator>
)

class Select extends PureComponent {

  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption })
  }

  render() {
    const {
      colour,
      icon,
      ...filteredProps
    } = this.props
    const { selectedOption } = this.state

    return (
      <SelectStyle
        classNamePrefix="react-select"
        icon={icon}
        colour={colour}
        components={{ DropdownIndicator, IndicatorSeparator: null }}
        value={selectedOption}
        onChange={this.handleChange}
        {...filteredProps}
      />
    )
  }
}

export default Select