import { rem } from 'polished'
import styled from 'styled-components'
import { Device, theme } from 'styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 55px;
  justify-content: center;
  flex-direction: column;
  z-index: 20;

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
    flex-direction: column;
  }
`

export const Title = styled.h3`
  text-align: center;
  color: ${theme.secondaryLight};
  font-size: ${rem(33)};
`

export const Image = styled.img`
  width: 46%;
  z-index: 20;
  object-fit: contain;
  margin-left: 10px;

  @media ${Device.untilLaptop} {
    margin-left: 0;
    margin-top: 30px;
  }

  @media ${Device.untilLaptop} {
    width: 100%;
  }
`
