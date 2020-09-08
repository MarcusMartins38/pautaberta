import React, { FC } from 'react'

import { Title, Description } from 'components'
import { Container, Painel } from './styles'

export const LawyerSite: FC = () => {
  return (
    <Container>
      <Title>Site do Advogado</Title>
      <Painel>
        <Description>
          Você poderá produzir um site para atender seus clientes e fornecer as
          informações institucional do seu escritório, importante frisar que o
          valor da licença não contempla esse serviço, porem a Comunidade
          PautAberta também desenvolve e integra o sistema ao site do seu
          escritório, que independe do tamanho, deve mostrar organização e
          transparência para seus clientes.
        </Description>
      </Painel>
    </Container>
  )
}
