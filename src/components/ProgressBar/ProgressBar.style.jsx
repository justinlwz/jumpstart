import styled from 'styled-components'
import { radius, shadow } from '../Styles/StyleUtils/Mixins.style'
import { navActive, gray100, gray600, grayD00, grayF00 } from '../Styles/StyleUtils/Colours.style'

export const ProgressBarStyle = styled.div`
    width: 100%;
    height: 24px;
    overflow: hidden;
    background: $color-gray-C00;
    @include round-corners($value: 2px);
    @include shadow($inset: true);
    ${radius({value:'2px'})}
    ${shadow({inset:true})}
`

export const CheckStyle = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    font-size: 14px;
    text-align: center;
    width: 14px;
    line-height: 14px;
    color: transparent;
    ${InputStyle}:checked ~ ${BoxStyle} & {
        color: white;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
    }
`