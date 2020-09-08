import styled from 'styled-components'
import { rem } from 'polished'
import { Colors, FontWheight, theme } from 'styles'

export const Container = styled.div`
  background-color: ${Colors.base.white};
  border-radius: 8px;
  padding: 60px;
  border: 1px solid ${Colors.grey.tint200};

  display: flex;
  flex-direction: column;
`

export const LastInputsDiv = styled.div`
  max-width: 230px;
  margin-bottom: 160px;
`

export const Button = styled.button`
  width: 100%;
  height: 60px;
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
