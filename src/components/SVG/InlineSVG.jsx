import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class InlineSVG extends PureComponent {
  static propTypes = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  }

  static defaultProps = {
    src: null,
  }

  componentDidMount() {
    // Props
    const { src } = this.props

    fetch(src)
      .then(response => response.text())
      .then((svgText) => {
        this._inlineSVGInsert(svgText)
      })
  }

  // SVG Single Icon Parser
  _inlineSVGInsert = (svgRaw) => {
    let fragment
    if (typeof src === 'object') {
      fragment = src
    } else {
      // Doc fragment from DOM Parser
      fragment = new DOMParser().parseFromString(svgRaw, 'image/svg+xml')
    }
    const parentSVG = fragment.querySelector('svg')

    const viewBox = parentSVG.getAttribute('viewBox')
    this.inlineSVGInsertion.setAttribute('viewBox', viewBox)

    const width = parentSVG.getAttribute('width')
    this.inlineSVGInsertion.setAttribute('width', width)

    const height = parentSVG.getAttribute('height')
    this.inlineSVGInsertion.setAttribute('height', height)

    // Loop through parentSVG -> append to the Insertion Point childNodes
    while (parentSVG.childNodes.length > 0) {
      this.inlineSVGInsertion.appendChild(parentSVG.childNodes[0])
    }
  }

  render() {
    return (
      <svg
        ref={(insertionPoint) => {
          this.inlineSVGInsertion = insertionPoint
        }}
      />
    )
  }
}

export default InlineSVG
