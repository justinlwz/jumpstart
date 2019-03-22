import styled, { css } from 'styled-components'

export const Icon = styled.div`
  ${props => props.type == 'outline' && css`
    @import url('https://storage.googleapis.com/non-spec-apps/mio-icons/latest/outline.css');  
  `}
  ${props => props.type == 'rounded' && css`
    @import url('https://storage.googleapis.com/non-spec-apps/mio-icons/latest/round.css');  
  `}
  ${props => props.type == 'two-tone' && css`
    @import url('https://storage.googleapis.com/non-spec-apps/mio-icons/latest/twotone.css');  
  `}
  ${props => props.type == 'sharp' && css`
    @import url('https://storage.googleapis.com/non-spec-apps/mio-icons/latest/sharp.css');  
  `}

  width: ${props => props.width || '24px'};
  height: ${props => props.height || '24px'};
  display: inline-block;
  background-repeat: no-repeat;
  background-size: contain;
`
// export const Icon = styled.div`
//   @import url('https://fonts.googleapis.com/css?family=Notable');
//   font-family: 'Material Icons';
//   font-weight: normal;
//   font-style: normal;
//   font-size: 24px;  /* Preferred icon size */
//   display: inline-block;
//   line-height: 1;
//   text-transform: none;
//   letter-spacing: normal;
//   word-wrap: normal;
//   white-space: nowrap;
//   direction: ltr;
// `