import React, { useEffect, useState } from 'react'
import { RightNav } from 'components'

import { Container, Item } from './styles'
import { usePositionY } from 'hooks'

interface Props {
  getOpen(open: boolean): void
}

export const Burger: React.FC<Props> = ({ getOpen }) => {
  const [open, setOpen] = useState(false)
  const positionY = usePositionY()

  useEffect(() => {
    getOpen(open)
  }, [open])
  return (
    <>
      <Container onClick={() => setOpen((previousState) => !previousState)}>
        <Item open={open} positionY={positionY} />
        <Item open={open} positionY={positionY} />
        <Item open={open} positionY={positionY} />
      </Container>
      <RightNav open={open} />
    </>
  )
}
