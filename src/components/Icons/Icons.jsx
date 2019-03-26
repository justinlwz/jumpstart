import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import IconStyle from './Icons.style'

class Icons extends PureComponent {

  static propTypes = {
    children: PropTypes.node,
    colour: PropTypes.string,
    size: PropTypes.number,
  }

  render() {
    const {
      children, 
      ...filteredProps
    } = this.props

    return (
      <IconStyle {...filteredProps}>
        {children}
      </IconStyle>
    )
  }
}

export default Icons
