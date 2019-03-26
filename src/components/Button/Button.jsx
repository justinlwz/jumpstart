import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ButtonStyle from './Button.style'


class Button extends PureComponent {

  static propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(['normal', 'quiet', 'no-effect']),
    radius: PropTypes.number,
    small: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    type: 'normal',
    radius: 3,
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
    const { 
      children, 
      ...filteredProps 
    } = this.props

    return <ButtonStyle {...filteredProps}>{children}</ButtonStyle>
  }
}

export default Button