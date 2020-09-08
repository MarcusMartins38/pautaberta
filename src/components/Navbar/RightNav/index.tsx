import React from 'react'

import { paths } from 'routes/routes'
import { List, Item } from './styles'

interface Props {
  open: boolean
}

export const RightNav: React.FC<Props> = ({ open }) => {
  return (
    <List open={open}>
      <Item to="#system">O SISTEMA</Item>
      <Item to="#doubt">DÚVIDAS</Item>
      <Item to="#price">PREÇO</Item>
      <Item to="#contact">CONTATO</Item>
      <Item to={paths.signIn}>Quero acessar meu sistema</Item>
    </List>
  )
}
