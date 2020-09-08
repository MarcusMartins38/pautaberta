import styled from 'styled-components'

import { Description as CustomDescription } from 'components'
import { Colors, Device, FontWheight, theme } from 'styles'

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

export const Card = styled.div`
  display: flex;
  margin: 50px 0;
  border: 0;
  padding: 40px;
  background: ${Colors.white};
  border-radius: 3px;
  position: relative;
  box-shadow: 0 5px 7px 0 ${theme.boxShadow};
  transition: all 0.3s ease;

  @media ${Device.untilLaptop} {
    width: 100%;
    text-align: center;
    flex-direction: column;
  }

  :hover {
    box-shadow: 0 5px 7px 0 ${theme.boxShadowHover};
    transform: translateY(-5px);
  }
`

export const Line = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(
    0,
    ${Colors.base.primary.tint100} 50%,
    ${Colors.base.secondary.tint400} 100%
  );
`

export const Icon = styled.span`
  font-size: 72px;
  margin-right: 30px;
  font-weight: ${FontWheight[100]};
  background: linear-gradient(
    0,
    ${Colors.base.primary.tint100} 50%,
    ${Colors.base.secondary.tint400} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${Device.untilLaptop} {
    margin-right: 0;
    margin-bottom: 30px;
  }
`

export const Description = styled(CustomDescription)`
  span {
    color: ${theme.secondaryLight};
  }

  span:last-child:before {
    content: ' ';
    display: block;
  }

  span:last-child {
    display: inline-block;
    word-break: break-word;
  }
`
