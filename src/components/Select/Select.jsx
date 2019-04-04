import React, { PureComponent } from 'react'
import ReactSelect, { components } from 'react-select'
import IconStyle from '../Icons/Icons.style'

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: 320,
    height: 48,
  }),
}

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <IconStyle 
        colour={props.selectProps.colour} 
      >
        {props.selectProps.icon}
      </IconStyle>
    </components.DropdownIndicator>
  )
}


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
      <ReactSelect
        icon={icon}
        colour={colour}
        styles={customStyles}
        components={{ DropdownIndicator, IndicatorSeparator: null }}
        value={selectedOption}
        onChange={this.handleChange}
        {...filteredProps}
      />
    )
  }
}

export default Select