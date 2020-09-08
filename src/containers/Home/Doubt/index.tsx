import React, { FC } from 'react'

import { Container, Painel, Question, Title, Answer } from './styles'

import { doubts } from './doubts'

export const Doubt: FC = () => {
  return (
    <Container>
      <Title fontSize={33}>Dúvidas</Title>
      <Painel>
        {doubts.map(({ title, answer }, key) => (
          <Question key={key}>
            <Title firstLetter>{title}</Title>
            <Answer>{answer}</Answer>
          </Question>
        ))}
      </Painel>
    </Container>
  )
}
