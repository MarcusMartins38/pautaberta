import React, { FC } from 'react'

import { Title, Description } from 'components'
import { Container, Painel, Image } from './styles'
import { totalIntegrationBg } from 'assets/images'

export const TotalIntegration: FC = () => {
  return (
    <Container>
      <Title>Integração Total</Title>
      <Painel>
        <Image src={totalIntegrationBg} />
        <Description>
          A ideia do PautAberta Sistema é unificar as informações processuais em
          apenas algumas telas, sem aquela complexidade natural dos sistemas de
          gestão de contencioso, você poderá acessar rapidamente todas as
          informações processuais com um simples clique e ter acesso a detalhes
          e relatórios da tela consultada. <br /> <br />
          Você poderá catalogar seus documentos referenciando conforme os
          processos, as petições iniciais, as contestações, entre outros
          documentos poderão ser disponibilizados para seus clientes, alem de
          criar uma imensa biblioteca nas nuvens para acessar seus documentos
          utilizando como base Índice seus processos.
        </Description>
      </Painel>
    </Container>
  )
}
