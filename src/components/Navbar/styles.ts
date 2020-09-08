import styled from 'styled-components'

interface PropsNavbar {
  open: boolean
  positionY: number
}

export const Container = styled.nav<PropsNavbar>`
  width: 100%;
  height: ${({ open }) => (open ? '380' : '100')}px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: ${({ positionY, open }) =>
    open
      ? `linear-gradient(
        172deg,
        rgba(49, 215, 219, 1),
        rgba(21, 100, 122, 1)
      )`
      : `linear-gradient(
      90deg,
      rgba(49, 215, 219, ${positionY > 9 ? 1 : `0.${positionY}`}) 00%,
      rgba(21, 100, 122, ${
        positionY > 9 ? 1 : positionY < 9 ? `0.${positionY}` : `0.${positionY}`
      }) 100%
    )`};
  align-items: center;
  position: fixed;
  transition: all 0.3s ease;
`

export const Logo = styled.img`
  width: 170px;
  z-index: 20;
  position: absolute;
  top: 20px;
`
