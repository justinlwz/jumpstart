import styled, { css, keyframes } from 'styled-components'
import { radius, shadow, transition } from '../Styles/StyleUtils/Mixins.style'
import { gradientLight, gradientDark, grayC00, gray100 } from '../Styles/StyleUtils/Colours.style'

const progressAnimation = keyframes`
  0% { 
    background-position: 0% 50% 
  }
  50% { 
    background-position: 100% 50% 
  }
  100% { 
    background-position: 0% 50% 
  }
`

export const ProgressBarStyle = styled.div`
  width: ${props => props.width + 'px'};
  height: 24px;
  position: relative;
  background: ${grayC00};
  ${radius({value:'2px'})}
  ${shadow({inset:true})}
`

export const BarStyle = styled.div`
    ${props => props.mode == 'indeterminate' && css`
    width: 100%;
  `}
  ${props => props.mode == 'determinate' && css`
    width: ${props => props.value + '%'};
  `}
  height: 100%;
  background-image: linear-gradient(140deg, ${gradientLight}, ${gradientDark});
  background-size: 200% 100%;
  animation: ${progressAnimation} 3s ease-in-out infinite;
  ${radius({value:'2px'})}
  ${shadow({inset:true})}
  ${transition({prop:'width', timing: '150ms'})}
  :disabled {
    display: none;
  }
`

export const TextStyle = styled.span`
  top: 28px;
  right: 0;
  font-size: 11px;
  font-weight: 600;
  line-height: 16px;
  text-transform: uppercase;
  position: absolute;
  color: ${gray100};
`