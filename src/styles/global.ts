import { createGlobalStyle } from 'styled-components'
import { Fonts } from './fonts'

import 'antd/dist/antd.css'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: ${Fonts.primary};
  }
`
