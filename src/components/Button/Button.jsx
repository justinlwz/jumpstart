import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ButtonStyle from './Button.style'

class Button extends Component {

    // PropTypes
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        href: PropTypes.string,
        onClick: PropTypes.func,
        small: PropTypes.bool,
        target: PropTypes.oneOf([
            '_blank',
            '_parent',
            '_self',
            '_top',
        ]),
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
            children,
            href,
            ...filteredProps
        } = this.props

        // Create Element
        if (href) {
            return(
                <ButtonStyle 
                    as="a"
                    href={href} 
                    rel="noreferrer noopener"
                    {...filteredProps}
                >
                    {children}
                </ButtonStyle>
            )
        }
        else {
            return (
                <ButtonStyle as="button" {...filteredProps}>
                    {children}
                </ButtonStyle>
            )
        }
    }
}

export default Button
