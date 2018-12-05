import styled, { css } from 'styled-components'
import { transition } from '../../components/Styles/StyleUtils/Mixins.style'
import { nav, navActive, disabled } from '../../components/Styles/StyleUtils/Colours.style'

const ButtonStyle = styled.button`
    height: ${props => props.small ? "24px" : "32px"};
    font-size: ${props => props.small ? "12px" : "14px"};
    font-weight: 600;
    line-height: ${props => props.small ? "24px" : "32px"};
    position: relative;
    cursor: pointer;
    padding: ${props => props.small ? "0 8px" : "0 16px"};
    border-radius: ${props => props.radius + 'px'};
    outline: none;
    border: none;
    text-decoration: none;
    ${transition({timing:'150ms'})}

    /* Disabled Style */
    :disabled {  pointer-events: none; }

    /* Button Type */
    ${props => props.type == 'normal' && css`
        color: white;
        background-color: ${nav};
        :hover {
            background-color: ${navActive};
        }
        :disabled {
            background-color: ${disabled};
        }
    `}

    ${props => props.type == 'quiet' && css`
        color: ${nav};
        background-color: transparent;
        :hover {
            color: ${navActive};
            background-color: rgba(19, 161, 228, 0.05);
        }
        :disabled {
            color: ${disabled};
        }
    `}

`

export default ButtonStyle