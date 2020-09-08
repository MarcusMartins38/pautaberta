import React, { FC } from 'react'

import { SignUp } from 'containers/Home/SignUp'
import { headerImage } from '@assets/images'

import { Container, Painel, Image, Title } from './styles'

export const Header: FC = () => {
  return (
    <Container>
      <Image src={headerImage} />
      <Painel>
        <Title>
          Torne seu dia a dia jurídico mais produtivo, teste por 30 dias grátis.
        </Title>
        <SignUp />
      </Painel>
    </Container>
  )
}
