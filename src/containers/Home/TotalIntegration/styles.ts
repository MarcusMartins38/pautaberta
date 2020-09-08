import styled from 'styled-components'
import { Device, theme } from 'styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 55px;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.backgroundGrey};

  @media ${Device.untilLaptop} {
    padding: 55px 30px;
  }
`

export const Painel = styled.div`
  display: flex;
  margin-top: 50px;

  @media ${Device.untilLaptop} {
    width: 100%;
    text-align: center;
    flex-direction: column-reverse;
  }
`

export const Image = styled.img`
  width: 40%;
  z-index: 20;
  object-fit: contain;

  @media ${Device.untilLaptop} {
    width: 100%;
    margin-top: 30px;
  }
`
