import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { CheckboxStyle, InputStyle, LabelStyle } from './Checkbox.style'

class Checkbox extends Component {

    // PropTypes
    static propTypes = {
        disabled: PropTypes.bool,
        name: PropTypes.string,
        label: PropTypes.string.isRequired,
        labelPosition: PropTypes.oneOf(['left', 'right']),
        onChange: PropTypes.func,
    }

    static defaultProps = {
        checked: false,
        disabled: false,
        labelPosition: 'right',
        value: false,
    }

    constructor(props) {
        super(props)
        this.state = { value: props.checked }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        if (this.props.onChange) {
            this.props.onChange(!this.state.value)
        }
        this.setState({ value: !this.state.value })
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.value !== nextProps.checked) {
            this.setState({
                value: nextProps.checked
            })
        }
    }

    render() {

        // Props
        const {
            disabled,
            name,
            label,
            labelPosition,
        } = this.props

        // State
        const {
            value,
        } = this.state


        // Create Element
        return (
            <CheckboxStyle as="div">
                <InputStyle as="input"
                       type="checkbox"
                       id={label}
                       checked={value}
                       value={value}
                       name={name}
                       disabled={disabled}
                       onChange={this.handleChange}
                />
                <LabelStyle as="label" htmlFor={label} labelPosition={labelPosition}>
                    {label}
                </LabelStyle>
            </CheckboxStyle>
        )
    }
}

export default Checkbox
