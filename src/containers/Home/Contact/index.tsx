import React, { FC } from 'react'

import {
  Container,
  Painel,
  DescriptionArea,
  Description,
  MailArea,
  IconArea,
  Icon,
  Mail,
} from './styles'

export const Contact: FC = () => {
  return (
    <Container>
      <Painel>
        <DescriptionArea>
          <Description>
            Siga nossos perfis nas redes sociais, faça parte da comunidade que
            mais cresce na internet. Em caso de dúvidas nos envie um e-mail, só
            não deixe de participar. <br /> <br />
          </Description>
          <MailArea>
            <Mail>{'\u2709'}</Mail>
            <Description>relacionamento@pautaberta.com.br</Description>
          </MailArea>
        </DescriptionArea>
        <IconArea>
          <Icon />
        </IconArea>
      </Painel>
    </Container>
  )
}
