import styled from 'styled-components'
import { rem } from 'polished'
import { Colors, Device, FontWheight, theme } from 'styles'

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 20;

  @media ${Device.untilLaptop} {
    width: 100%;
    text-align: center;
  }
`

export const Input = styled.input`
  padding: 10px;
  border: 0;
  border-radius: 4px;
  font-size: ${rem(16)};
  color: ${theme.inputColor};
  border: 1px solid ${theme.boxShadowHover};

  :nth-child(n + 1) {
    margin: 10px 0;
  }

  :first-child {
    margin-top: 20px;
  }
`

export const ListState = styled.select`
  padding: 10px;
  border-radius: 4px;
  font-size: ${rem(16)};
  color: ${theme.inputColor};
  border: 1px solid ${theme.boxShadowHover};
  margin-top: 10px;
  appearance: none;
  background-color: ${Colors.white};
  background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${theme.secondaryLight} 50%
    ),
    linear-gradient(135deg, ${theme.secondaryLight} 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
`

export const Submit = styled.input`
  padding: 15px 10px;
  border: 0;
  border-radius: 4px;
  background: ${Colors.white};
  color: ${theme.secondaryLight};
  font-weight: ${FontWheight[700]};
  font-size: ${rem(14)};
  text-transform: uppercase;
  transition: all 0.3s ease;
  margin-top: 30px;
  box-shadow: 0 5px 7px 0 ${theme.boxShadow};
  cursor: pointer;

  :hover {
    background: ${theme.backgroundGrey};
    color: ${Colors.base.warning};
    box-shadow: 0 5px 7px 0 ${theme.boxShadowHover};
    transform: translateY(-3px);
  }
`
