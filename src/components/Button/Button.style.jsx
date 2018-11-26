import styled from 'styled-components';

const ButtonStyle = styled.button`
    font-size: 12px;
    font-weight: 600;
    line-height: ${props => props.href ? "initial" : "1"};
    position: relative;
    cursor: pointer;
    padding: 0 16px;
    outline: none;
    border: none;
    background-color: transparent;
    text-decoration: none;
    &:disabled { pointer-events: none; }
`;

export default ButtonStyle;