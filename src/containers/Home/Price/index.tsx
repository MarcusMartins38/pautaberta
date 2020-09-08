import React, { FC } from 'react'

import { Title } from 'components'
import { Container, Card, Line, Icon, Description } from './styles'

export const Price: FC = () => {
  return (
    <Container>
      <Title>Preço</Title>
      <Card>
        <Line />
        <Icon>$</Icon>
        <Description>
          Por apenas <span>R$ 49,00</span> você terá acesso ao cadastramento de
          ate 1000 processos e uma licença para uso, serão 30 dias gratuitamente
          para você experimentar o sistema, após esse prazo a cobrança será
          iniciada. <br /> <br /> Optando pelo plano anual, a mensalidade terá
          um desconto de 20% consulte outros planos através do email{' '}
          <span>relacionamento@pautaberta.com.br</span>
        </Description>
      </Card>
    </Container>
  )
}
