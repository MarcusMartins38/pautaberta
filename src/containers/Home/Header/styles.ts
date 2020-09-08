import { rem } from 'polished'
import styled from 'styled-components'
import { Device, FontWheight } from 'styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 55px;
  justify-content: space-evenly;

  @media ${Device.untilLaptop} {
    flex-direction: column;
    padding: 55px 30px;
  }
`

export const Image = styled.img`
  width: 52%;
  z-index: 20;
  object-fit: contain;

  @media ${Device.untilLaptop} {
    width: 100%;
  }
`

export const Painel = styled.div`
  display: flex;
  width: 35%;
  flex-direction: column;
  justify-content: space-evenly;

  @media ${Device.untilLaptop} {
    width: 100%;
    margin-top: 150px;
    text-align: center;
  }
`

export const Title = styled.h3`
  color: white;
  font-size: ${rem(25)};
  font-weight: ${FontWheight[300]};
  letter-spacing: -1px;
  text-align: start;
`

export const SignIn = styled.div`
  height: 300px;
  border: 1px solid white;
  border-radius: 4px;
`
