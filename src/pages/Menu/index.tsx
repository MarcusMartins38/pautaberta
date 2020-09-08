import React, { FC } from 'react'
import { Calendar } from 'antd'

import { Menu as MenuContainer } from 'containers'

import { Page } from './styles'

const Menu: FC = () => {
  return (
    <Page>
      <MenuContainer></MenuContainer>
    </Page>
  )
}

export default Menu
