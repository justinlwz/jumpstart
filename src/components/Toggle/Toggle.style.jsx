import styled, { css } from 'styled-components'
import { radius, transition, shadow } from '../Styles/StyleUtils/Mixins.style'
import { navActive, gray100, grayD00, gray700 } from '../Styles/StyleUtils/Colours.style'

export const ToggleStyle = styled.div`
  user-select: none;
  display: inline-flex;
  align-items: center;
`

export const InputStyle = styled.input`
  top: 24px;
  position: absolute;
  display: ${props => props.debug ? "block" : "none"};
`

export const LabelStyle = styled.label`
  line-height: 24px;
  text-align: left;
  position: relative;
  cursor: pointer;
  color: ${gray100};
  ${transition({prop:'color', timing:'100ms'})}
  ${InputStyle}:checked ~ & {
    color: ${navActive};
  }
  ${InputStyle}:disabled ~ & {
    cursor: default;
    color: ${grayD00};
    ~ ${FrameStyle} { 
      border-color: ${grayD00}; 
    }
  }
`

export const FrameStyle = styled.div`
    width: 40px;
    height: 24px;
    ${props => props.labelPosition && css`
      margin-right: ${props => props.labelPosition == 'right' ? '8px' : 0};
      margin-left: ${props => props.labelPosition == 'right' ? 0 : '8px'};
    `}
    position: relative;
    order: ${props => props.labelPosition == 'right' ? 0 : 1};
    background-color: ${gray700};
    ${radius({value:'12px'})}
    ${transition({prop:'all', timing:'100ms'})}
    ${InputStyle}:checked ~ & {
      background-color: ${navActive};
    }
`

export const KnobStyle = styled.div`
    top: 4px;
    left: 4px;
    width: 16px;
    height: 16px;
    position: absolute;
    background-color: white;
    ${radius({value:'50%'})}
    ${shadow({offsetY:'2px', opacity:'0.15'})}
    ${transition({prop:'all', timing:'100ms'})}
    ${InputStyle}:checked ~ ${FrameStyle} & {
      left: 20px;
    }
`