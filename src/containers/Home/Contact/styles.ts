import styled from 'styled-components'
import { rem } from 'polished'
import { FaFacebookF } from 'react-icons/fa'

import { Colors, Device, theme } from 'styles'

import { Description as CustomDescription } from 'components'

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
  justify-content: space-between;

  @media ${Device.untilLaptop} {
    margin-top: 0;
    flex-direction: column;
    align-items: center;
  }
`

export const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;

  @media ${Device.untilLaptop} {
    align-items: center;
  }
`

export const Description = styled(CustomDescription)`
  width: 50%;

  @media ${Device.untilLaptop} {
    width: auto;
    text-align: center;
  }
`

export const MailArea = styled.div`
  display: flex;
  align-items: center;
`

export const Mail = styled.span`
  font-size: ${rem(30)};
  color: ${Colors.grey.tint500};
  margin-right: 10px;
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

export const IconArea = styled.div`
  display: flex;
  padding: 15px;
  height: fit-content;
  border-radius: 10%;
  transition: all 0.3s ease;
  box-shadow: 0 0 21px -6px ${theme.boxShadowHover};
  cursor: pointer;

  :hover {
    svg {
      color: ${theme.primaryLight};
    }
  }

  @media ${Device.untilLaptop} {
    width: fit-content;
    justify-content: center;
    margin-top: 20px;
  }
`

export const Icon = styled(FaFacebookF)`
  font-size: ${rem(22)};
  color: ${Colors.base.warning};
  transition: all 0.3s ease;
`
