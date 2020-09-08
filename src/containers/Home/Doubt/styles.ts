import styled, { css } from 'styled-components'
import { rem } from 'polished'

import { Title as CustomTitle, TitleProps, Description } from 'components'

import { Device } from 'styles'

interface CustomTitleProps {
  firstLetter?: boolean
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 55px;
  justify-content: center;
  flex-direction: column;

  @media ${Device.untilLaptop} {
    padding: 55px 30px;
  }
`

export const Painel = styled.div`
  display: grid;
  grid-row-gap: 40px;
  grid-column-gap: 30px;
  grid-template-columns: auto auto;
  margin-top: 50px;

  @media ${Device.untilLaptop} {
    grid-column-gap: 0;
    grid-template-columns: auto;
  }
`

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled(CustomTitle)<TitleProps & CustomTitleProps>`
  ${({ fontSize, firstLetter }) => css`
    text-transform: ${firstLetter ? 'none' : 'uppercase'};
    font-size: ${rem(fontSize || 20)};

    ::first-letter {
      text-transform: ${firstLetter && 'uppercase'};
    }

    @media ${Device.untilLaptop} {
      text-align: ${firstLetter && 'start'};
    }
  `};
`

export const Answer = styled(Description)`
  margin-top: ${rem(16)};
`
