import React, { FC } from 'react'

import { Title, Description } from 'components'
import { Container, Painel, Image } from './styles'
import { theSystemBg } from 'assets/images'

export const TheSystem: FC = () => {
  return (
    <Container id="system">
      <Title>O Sistema</Title>
      <Painel>
        <Description>
          Agora as tarefas do dia a dia serão desenvolvidas com mais facilidade,
          agilidade e eficácia por um preço que você possa pagar.
          <br /> <br /> Ter um sistema de gestão de contencioso é o grande sonho
          das maiores dos advogados, porem os custos com implementação
          inviabilizam tal contratação, com o PautAberta Sistema Jurídico, você
          poderá controlar as informações sobre prazo, andamento, honorários,
          custas e tudo que circunscreve o tramite natural de um processo.
          <br /> <br /> 100% web, o sistema permite o acesso de qualquer lugar
          via celular, notebook ou ate computadores públicos, pois os protocolos
          de segurança garante a integridade das informações armazenadas.
          <br /> <br /> O sistema permite interação total com seu cliente, as
          informações sobre andamentos e prazos podem ser compartilhadas através
          do seu site com seu cliente, apenas com o numero do CPF do cliente, é
          possível ter acesso apenas para visualização das informações
          processuais, em uma linguagem simples e de fácil entendimento,
          facilitando assim seu dia a dia e economizando seu tempo com
          atendimento, o que resultará em mais tempo para captar clientes.
        </Description>
        <Image src={theSystemBg} />
      </Painel>
    </Container>
  )
}
