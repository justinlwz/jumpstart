import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ButtonStyle from './Button.style'

class Button extends Component {

    // PropTypes
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        onClick: PropTypes.func,
        small: PropTypes.bool,
    }

    _handleClick = (e) => {
        const { disabled, onClick } = this.props
        if (disabled) {
            e.preventDefault()
            return
        }
        if (onClick) onClick(e)
    }

    render() {

        // Props
        const {
            children
            ...filteredProps
        } = this.props

        return (
            <ButtonStyle as="button" {...filteredProps}>
                {children}
            </ButtonStyle>
        )
    }
}

export default Button
