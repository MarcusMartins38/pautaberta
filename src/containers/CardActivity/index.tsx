import React, { FC } from 'react'

import {
  Container,
  Header,
  Title,
  Time,
  Description,
  Date,
  Contrast,
} from './styles'

import { CardActivityProps } from './types'

export const CardActivity: FC<CardActivityProps> = ({
  title,
  time,
  description,
  date,
  min,
  type,
  contrast,
}) => {
  return (
    <Container min={min} type={type}>
      <Header>
        <Title>{title}</Title>

        {date && (
          <Date>
            Data: <strong>{date}</strong>
          </Date>
        )}
      </Header>

      {time && <Time>{time}</Time>}

      <Description>{description}</Description>

      {contrast && (
        <Contrast min={min} type={type}>
          {contrast}
        </Contrast>
      )}
    </Container>
  )
}
