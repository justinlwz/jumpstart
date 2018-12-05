import styled, { css } from 'styled-components'
import { radius, transition, shadow } from '../../components/Styles/StyleUtils/Mixins.style'
import { navActive, gray100, gray600, grayD00, grayF00 } from '../../components/Styles/StyleUtils/Colours.style'

export const RadioStyle = styled.div`
    text-align: left;
    position: relative;
    user-select: none;
`

export const InputStyle = styled.input`
    top: 24px;
    left: 28px;
    position: absolute;
    display: ${props => props.debug ? "block" : "none"};
`

export const LabelStyle = styled.label`
    line-height: 24px;
    text-align: left;
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    color: ${gray100};
    ${transition({prop:'color', timing:'100ms'})}
    :before {
        content: " ";
        width: 16px;
        height: 16px;
        margin-right: ${props => props.labelPosition == 'right' ? '8px' : 0};
        margin-left: ${props => props.labelPosition == 'right' ? 0 : '8px'};
        order: ${props => props.labelPosition == 'right' ? 0 : 1};
        border: solid 1px ${gray600};
        background-color: ${grayF00};
        ${radius({value:'2px'})}
        ${transition({prop:'all', timing:'100ms'})}
    }
    ${InputStyle}:checked ~ & {
        color: ${navActive};
        :before {
            border: transparent 1px;
            background-color: ${navActive};
        }
        :after {
            content: " ";
            ${props => props.labelPosition == 'left' && css`
                right: 0;
            `}
            position: absolute;
            width: 8px;
            height: 8px;
            display: block;
            background-color: white;
            ${radius({value:'50%'})}
            ${shadow({opacity:'0.25'})}
        }
    }
    ${InputStyle}:disabled ~ & {
        cursor: default;
        color: ${grayD00};
        :before { 
            border-color: ${grayD00}; 
        }
    }
`