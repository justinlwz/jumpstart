import { createGlobalStyle } from 'styled-components'
import Normalize from './Normalize.style'
import Fonts from './Fonts.style'

const GlobalStyle = createGlobalStyle`

  ${Normalize}
  ${Fonts}
  
  html, body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
    font-size: 15px;
    line-height: 24px;
    font-weight: 400;
  }
  
  body {
    margin: 0;
    padding: 0;
    position: relative;
    cursor: auto;
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
  }
`

export default GlobalStyle