import styled, { css } from 'styled-components'
import { radius, transition, shadow } from '../../components/Styles/StyleUtils/Mixins.style'
import { navActive, gray100, gray600, grayD00, grayF00 } from '../../components/Styles/StyleUtils/Colours.style'

export const InputStyle = styled.input`
  top: 24px;
  position: absolute;
  display: ${props => props.debug ? "block" : "none"};
`

export const RadioStyle = styled.label`
  user-select: none;
  display: inline-flex;
  align-items: center;
  line-height: 24px;
  text-align: left;
  position: relative;
  cursor: pointer;
  color: ${gray100};
  ${transition({prop:'color', timing:'100ms'})}
  ${InputStyle}:checked ~ & {
    color: ${navActive};
  }
  ${props => props.disabled && css`
    cursor: default;
    color: ${grayD00};
    ${CircleStyle} { 
      border-color: ${grayD00}; 
    }
  `}
  }
`

export const CircleStyle = styled.div`
  width: 16px;
  height: 16px;
  margin-right: ${props => props.labelPosition == 'right' ? '8px' : 0};
  margin-left: ${props => props.labelPosition == 'right' ? 0 : '8px'};
  position: relative;
  order: ${props => props.labelPosition == 'right' ? 0 : 1};
  border: solid 1px ${gray600};
  background-color: ${grayF00};
  ${radius({value:'50%'})}
  ${transition({prop:'all', timing:'100ms'})}
  ${InputStyle}:checked ~ & {
    border: solid 1px transparent;
    background-color: ${navActive};
  }
`

export const MarkStyle = styled.div`
  top: 4px;
  left: 4px;
  position: absolute;
  width: 6px;
  height: 6px;
  color: transparent;
  ${radius({value:'50%'})}
  ${InputStyle}:checked ~ ${CircleStyle} & {
    background-color: white;
    ${shadow({offsetY:'3px', opacity:'0.25'})}
  }
`