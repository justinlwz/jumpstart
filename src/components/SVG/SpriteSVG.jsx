import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class SpriteSVG extends PureComponent {

    static propTypes = {
        vBoxWidth: PropTypes.number,
        vBoxHeight: PropTypes.number,
        defsInjectionSelector: PropTypes.string,
        icon: PropTypes.string,
        src: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ]),
    }

    static defaultProps = {
        vBoxWidth: null,
        vBoxHeight: null,
        defsInjectionSelector: null,
        icon: null,
        src: null,
    }

    componentDidMount() {
        // Props
        const {
            src,
        } = this.props

        fetch(src)
            .then(response => response.text())
            .then((svgText) => {
                this._parseSVGSprite(svgText)
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.src !== prevProps.src) {
            this._parseSVGSprite(this.props.src)
        }
    }

    // SVG Spritesheet Parser
    // Implementation is specific to Sketch.app SVG export
    _parseSVGSprite = (src) => {

        const {
            defsInjectionSelector
        } = this.props

        // Doc fragment from DOM Parser
        let fragment
        if (typeof (src) === 'object') {
            fragment = src
        } else {
            fragment = new DOMParser().parseFromString(src, 'image/svg+xml')
        }
        const insertionPoint = this.spriteSheetInsertion

        // Get attribute
        // Get ID that matched with attributes
        const attr = 'data-sprite'
        let artboardID
        if (insertionPoint) {
            artboardID = insertionPoint.getAttribute(attr)
        }

        // Get top definition object
        // Create invisible Defs for reference
        let defs = fragment.querySelector('svg > defs')
        if (defs) {
            const defsWrapper = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
            defsWrapper.id = fragment.querySelector('title').textContent
            defsWrapper.style.height = '0'
            defsWrapper.style.width = '0'
            defsWrapper.style.position = '0'
            defsWrapper.appendChild(defs)
            if (defsInjectionSelector) {
                document.querySelector(defsInjectionSelector).appendChild(defsWrapper)
            } else {
                document.body.appendChild(defsWrapper)
            }
        }

        let svgIcon = fragment.getElementById(artboardID)
        if (svgIcon) {
            svgIcon = svgIcon.cloneNode(true)
            // Remove relative Transforms
            svgIcon.removeAttribute('transform')
            insertionPoint.appendChild(svgIcon)
        }
    }

    render() {
        // Props
        const {
            vBoxWidth,
            vBoxHeight,
            icon,
        } = this.props

        // Create Element
        return (
            <svg 
                ref={(insertionPoint) => { this.spriteSheetInsertion = insertionPoint }} 
                viewBox={`0 0 ${vBoxWidth} ${vBoxHeight}`} 
                data-sprite={icon} 
            />
        )
    }
}

export default SpriteSVG
