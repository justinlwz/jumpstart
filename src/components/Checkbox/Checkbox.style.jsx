import styled from 'styled-components'
import { radius, transition } from '../../components/Styles/StyleUtils/Mixins.style'
import { navActive, gray100, gray600, grayD00, grayF00 } from '../../components/Styles/StyleUtils/Colours.style'

export const CheckboxStyle = styled.div`
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
  ${transition({ prop: 'color', timing: '100ms' })}
  ${InputStyle}:checked ~ & {
    color: ${navActive};
  }
  ${InputStyle}:disabled ~ & {
    cursor: default;
    color: ${grayD00};
    ~ ${BoxStyle} { 
      border-color: ${grayD00}; 
    }
  }
`

export const BoxStyle = styled.div`
  width: 16px;
  height: 16px;
  margin-right: ${props => props.labelPosition == 'right' ? '8px' : 0};
  margin-left: ${props => props.labelPosition == 'right' ? 0 : '8px'};
  position: relative;
  order: ${props => props.labelPosition == 'right' ? 0 : 1};
  border: solid 1px ${gray600};
  background-color: ${grayF00};
  ${radius({ value: '2px' })}
  ${transition({ prop: 'all', timing: '100ms' })}
  ${InputStyle}:checked ~ & {
    border: solid 1px transparent;
    background-color: ${navActive};
  }
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