import React from 'react'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale-provider/pt_BR'
import moment from 'moment'
import 'moment/locale/pt-br'

import { ThemeProvider } from 'styled-components'

import { Routes } from 'routes'
import { GlobalStyle, theme } from 'styles'

moment.locale('pt-br')

const App: React.FC = () => (
  <ConfigProvider locale={ptBR}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </ConfigProvider>
)

export default App
