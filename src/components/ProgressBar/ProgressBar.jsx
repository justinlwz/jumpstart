import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { ProgressBarStyle, BarStyle, TextStyle } from './ProgressBar.style'

class ProgressBar extends PureComponent {

  static propTypes = {
    mode: PropTypes.oneOf([
      'determinate',
      'indeterminate',
    ]),
    width: PropTypes.number,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number
  }

  static defaultProps = {
    mode: 'determinate',
    width: 320,
    value: 0,
    min: 0,
    max: 100,
  }

  render() {
    const {
      max,
      mode,
      value,
      ...filteredProps
    } = this.props

    return (
      <ProgressBarStyle {...filteredProps}>
        <BarStyle mode={mode} value={value} />
        <TextStyle>
          {mode === 'determinate'
            ? (value / max) * 100 + '%'
            : 'Loading...'
          }
        </TextStyle>
      </ProgressBarStyle>
    )
  }
}

export default ProgressBar
