import styled from 'styled-components'
import { radius, transition } from '../../components/Styles/StyleUtils/Mixins.style'
import { navActive, gray100, gray600, grayD00, grayF00 } from '../../components/Styles/StyleUtils/Colours.style'

export const CheckboxStyle = styled.div`
    text-align: left;
    position: relative;
    display: inline-flex;
    user-select: none;
`

export const InputStyle = styled.input`
    top: 5px;
    left: -16px;
    width: 16px;
    height: 16px;
    position: absolute;
    display: none;
    :checked ~ ${LabelStyle}:before {
        left: 0;
        right: auto;
        border: transparent 1px;
        background-color: ${navActive};
    }
    :checked ~ ${LabelStyle}:after {
        content: "✓";
        top: 50%;
        left: 0;
        right: auto;
        transform: translateY(-50%);
        position: absolute;
        font-size: 14px;
        text-align: center;
        width: 16px;
        line-height: 16px;
        display: inline-block;
        color: white;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25)
    }
`

export const LabelStyle = styled.label`
    line-height: 24px;
    text-align: left;
    cursor: pointer;
    position: relative;
    color: ${gray100};
    ${transition({prop:'all', timing:'100ms'})}
    padding-left: 28px;
    padding-right: 0;
    :before {
        content: " ";
        top: 50%;
        left: 0;
        right: auto;
        transform: translateY(-50%);
        position: absolute;
        width: 16px;
        height: 16px;
        display: block;
        border: solid 1px ${gray600};
        background-color: ${grayF00};
        ${radius({value:'2px'})}
    }
    ${InputStyle}:disabled ~ & {
        cursor: default;
        color: ${grayD00};
        :before { 
            border-color: ${grayD00}; 
        }
    }
    ${InputStyle}:checked ~ & {
        color: ${navActive};
    }
`