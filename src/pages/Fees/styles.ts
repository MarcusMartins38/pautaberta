import styled from 'styled-components'
import { rem } from 'polished'
import { Colors, FontWheight, theme } from 'styles'

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`

export const Button = styled.button`
  width: 160px;

  height: 48px;
  font-size: ${rem(14)};
  color: ${({ back }: { back?: boolean }) =>
    back ? theme.secondaryLight : Colors.base.white};
  font-weight: ${FontWheight[700]};
  border: 0;
  outline: none;
  background-color: ${({ back }: { back?: boolean }) =>
    back ? Colors.base.white : theme.secondaryLight};
  border: ${({ back }: { back?: boolean }) =>
    back ? `1px solid ${Colors.grey.tint100}` : 'none'};
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: ${({ back }: { back?: boolean }) =>
      back ? theme.secondaryLight : theme.secondaryHover};
    color: ${({ back }: { back?: boolean }) => back && Colors.base.white};
  }
`
