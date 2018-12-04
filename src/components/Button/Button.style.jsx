import styled, { css } from 'styled-components'

const ButtonStyle = styled.button`
    height: ${props => props.small ? "24px" : "32px"};
    font-size: ${props => props.small ? "12px" : "14px"};
    font-weight: 600;
    line-height: ${props => props.small ? "24px" : "32px"};
    display: inline-block;
    position: relative;
    cursor: pointer;
    padding: ${props => props.small ? "0 8px" : "0 16px"};
    border-radius: ${props => props.radius + 'px'};
    outline: none;
    border: none;
    text-decoration: none;
    transition: all 150ms ease-in-out;

    /* Disabled Style */
    :disabled {  pointer-events: none; }

    /* Button Type */
    ${props => props.type == 'normal' && css`
        color: white;
        background-color: #13A1E4;
        :hover {
            background-color: #006187;
        }
        :disabled {
            background-color: #D9DADB;
        }
    `}

    ${props => props.type == 'quiet' && css`
        color: #13A1E4;
        background-color: transparent;
        :hover {
            color: #006187;
            background-color: rgba(19, 161, 228, 0.05);
        }
        :disabled {
            color: #D9DADB;
        }
    `}

`

export default ButtonStyle