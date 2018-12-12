import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { 
    CheckboxStyle, 
    InputStyle, 
    LabelStyle, 
    BoxStyle, 
    CheckStyle 
} from './Checkbox.style'

class Checkbox extends PureComponent {

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
            name,
            label,
            labelPosition,
            disabled,
            debug,
        } = this.props

        const {
            value,
        } = this.state


        // Create Element
        return (
            <CheckboxStyle>
                <InputStyle type="checkbox"
                       id={label}
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
                <LabelStyle htmlFor={label}>
                    {label}
                </LabelStyle>
            </CheckboxStyle>
        )
    }
}

export default Checkbox
