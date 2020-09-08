import styled from 'styled-components'
import { Device, theme } from 'styles'

export interface PropsItem {
  open: boolean
  positionY: number
}

export const Container = styled.button`
  display: none;
  border: 0;
  background-color: transparent;
  z-index: 20;

  @media ${Device.untilLaptop} {
    display: flex;
    flex-direction: column;
    height: 25px;
    justify-content: space-between;
    position: absolute;
    right: 20px;
    top: 35px;
  }
`

export const Item = styled.div<PropsItem>`
  width: 2rem;
  height: 0.25rem;
  background-color: ${({ positionY, open }) =>
    open
      ? theme.secondaryLight
      : positionY > 9
      ? theme.primaryLight
      : theme.secondaryLight};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;

  &:nth-child(1) {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }
  &:nth-child(2) {
    transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
    opacity: ${({ open }) => (open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`
