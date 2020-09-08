import React, { useState } from 'react'
import { Burger } from 'components'

import { Container, Logo } from './styles'
import { logoBg } from 'assets/images'
import { usePositionY } from 'hooks'

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const positionY = usePositionY()

  return (
    <Container open={open} positionY={positionY}>
      <Logo src={logoBg} />
      <Burger getOpen={setOpen} />
    </Container>
  )
}
