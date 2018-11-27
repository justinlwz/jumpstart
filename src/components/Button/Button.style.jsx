import styled, { css } from 'styled-components';

const ButtonStyle = styled.button`
    height: ${props => props.small ? "24px" : "32px"};
    font-size: 12px;
    font-weight: 600;
    line-height: ${props => {
        if (props.href) {
            return (props.small ? "24px" : "32px");
        } else {
            return 1;
        }
    }};
    display: inline-block;
    position: relative;
    cursor: pointer;
    padding: 0 16px;
    outline: none;
    border: none;
    text-decoration: none;

    /* Disabled Style */
    :disabled { 
        pointer-events: none;
        background-color: #D9DADB;
    }

    /* Button Type */
    ${props => props.type == 'solid' && css`
        color: white;
        background-color: #13A1E4;
        transition: all 150ms ease-in-out;
        :hover {
            background-color: #006187;
        }
    `}

`;

export default ButtonStyle;