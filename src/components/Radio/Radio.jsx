import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { 
    RadioStyle, 
    InputStyle, 
    LabelStyle,
    CircleStyle,
    MarkStyle
} from './Radio.style'

class Radio extends PureComponent {

    // PropTypes
    static propTypes = {
        name: PropTypes.string,
        label: PropTypes.string.isRequired,
        labelPosition: PropTypes.oneOf(['left', 'right']),
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        debug: PropTypes.bool,
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
            name,
            label,
            labelPosition,
            disabled,
            debug,
        } = this.props

        // State
        const {
            value,
        } = this.state


        // Create Element
        return (
            <RadioStyle as="div">
                <InputStyle as="input"
                       type="radio"
                       id={label}
                       checked={value}
                       value={value}
                       name={name}
                       disabled={disabled}
                       debug={debug}
                       onChange={this.handleChange}
                />
                <CircleStyle as="div" labelPosition={labelPosition}>
                    <MarkStyle as="div" />
                </CircleStyle>
                <LabelStyle as="label" htmlFor={label} labelPosition={labelPosition}>
                    {label}
                </LabelStyle>
            </RadioStyle>
        )
    }
}

export default Radio