import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import {
  CheckboxStyle,
  InputStyle,
  BoxStyle,
  CheckStyle
} from './Checkbox.style'

class Checkbox extends PureComponent {

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    labelPosition: PropTypes.oneOf(['left', 'right']),
    checked: PropTypes.bool,
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
      this.setState({
        value: prevProps.checked
      })
    }
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
      <CheckboxStyle 
        htmlFor={id}
        labelPosition={labelPosition}
        disabled={disabled}
      >
        <InputStyle
          type="checkbox"
          id={id}
          checked={value}
          value={value}
          name={name}
          disabled={disabled}
          debug={debug}
          onChange={this.handleChange}
        />
        <BoxStyle labelPosition={labelPosition}>
          <CheckStyle>✓</CheckStyle>
        </BoxStyle>
        {label}
      </CheckboxStyle>
    )
  }
}

export default Checkbox
