import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { Colors, Fonts, FontWheight } from 'styles'
import { DescriptionProps } from '.'

export const Description = styled.span<Pick<DescriptionProps, 'fontSize'>>`
  ${({ fontSize }) => css`
    line-height: 1.5;
    color: ${Colors.grey.tint500};
    font-family: ${Fonts.primary};
    font-weight: ${FontWheight[400]};
    font-size: ${rem(fontSize || 16)};
  `}
`
