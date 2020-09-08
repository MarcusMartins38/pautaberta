import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { rem } from 'polished'

import { Colors, Device, Fonts, theme } from 'styles'

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  transition: height 0.3s ease;

  @media ${Device.untilLaptop} {
    flex-flow: column nowrap;
    text-align: center;
    background: ${theme.primaryLight};
    background: transparent;
    position: fixed;
    top: 100px;
    height: ${({ open }: { open: boolean }) => (open ? '280px' : '0')};
    overflow: hidden;
    right: 0;
    width: 100%;
  }
`

export const Item = styled(Link)`
  color: ${Colors.white}B3;
  font-family: ${Fonts.primary};
  padding: 18px 15px;
  text-decoration: none;
  font-size: ${rem(12)};
  transition: all 0.3s ease;

  &:last-child {
    color: white;
    padding: 10px 20px;
    border: 1px solid white;
    border-radius: 4px;

    @media ${Device.untilLaptop} {
      margin-bottom: 25px;
    }
  }

  &:hover {
    color: ${Colors.white};
  }
`
