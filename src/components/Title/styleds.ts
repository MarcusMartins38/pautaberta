import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { theme } from 'styles'
import { TitleProps } from '.'

export const Title = styled.h3<Pick<TitleProps, 'fontSize'>>`
  ${({ fontSize }) => css`
    text-align: center;
    color: ${theme.secondaryLight};
    font-size: ${rem(fontSize || 33)};
    text-transform: uppercase;
  `}
`
