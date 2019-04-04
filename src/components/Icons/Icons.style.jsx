import styled from 'styled-components'

export const IconStyle = styled.i`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: ${props => props.size || 24 + 'px'};
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  color: ${props => props.colour || 'black'};
`

export default IconStyle