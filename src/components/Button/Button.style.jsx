import styled from 'styled-components';

const ButtonStyle = styled.button`
    font-weight: 600;
    line-height: ${props => props.href ? "initial" : "1"}
    position: relative;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    text-decoration: none;
    &:disabled { pointer-events: none; }
`;

export default ButtonStyle;