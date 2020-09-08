import styled from 'styled-components'
import { rem } from 'polished'
import { Colors, FontWheight, theme } from 'styles'

export const Button = styled.button`
  width: 150px;
  height: 40px;
  font-size: ${rem(14)};
  color: ${Colors.base.white};
  font-weight: ${FontWheight[700]};
  border: 0;
  outline: none;
  background-color: ${theme.secondaryLight};
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: ${theme.secondaryHover};
  }
`
