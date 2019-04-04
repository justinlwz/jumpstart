import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import {
  RadioStyle,
  InputStyle,
  CircleStyle,
  MarkStyle,
} from './Radio.style'

class Radio extends PureComponent {

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    labelPosition: PropTypes.oneOf(['left', 'right']),
    checked: PropTypes.bool,
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    debug: PropTypes.bool
  }

  static defaultProps = {
    labelPosition: 'right',
    checked: false,
    disabled: false,
    debug: false,
    value: false,
  }

  constructor(props) {
    super(props)
    this.state = { value: props.checked }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== prevProps.checked) {
      this.updateValue(prevProps)
    }
  }

  updateValue(props) {
    this.setState({ value: props.checked })
  }

  handleChange() {
    if (this.props.onChange) {
      this.props.onChange(!this.state.value)
    }
    this.setState({ value: !this.state.value })
  }

  render() {
    const { 
      id, 
      name, 
      label,
      labelPosition, 
      disabled, 
      debug,
    } = this.props

    const { value } = this.state

    return (
      <RadioStyle 
        htmlFor={id} 
        labelPosition={labelPosition}
        disabled={disabled}
      >
        <InputStyle
          type="radio"
          id={id}
          checked={value}
          value={value}
          name={name}
          disabled={disabled}
          debug={debug}
          onChange={this.handleChange}
        />
        <CircleStyle labelPosition={labelPosition}>
          <MarkStyle />
        </CircleStyle>
        {label}
      </RadioStyle>
    )
  }
}

export default Radio
