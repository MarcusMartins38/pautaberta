import styled from 'styled-components'
import { rem } from 'polished'
import { Input as InputANTD } from 'antd'
import { Colors, FontWheight, theme } from 'styles'

export const Container = styled.div`
  background-color: ${Colors.base.white};
  border-radius: 8px;
  padding: 30px;
  border: 1px solid ${Colors.grey.tint200};
`

export const Input = styled(InputANTD)`
  padding: 20px;
  border-radius: 8px;
  color: ${Colors.grey.tint500};
  font-size: ${rem(18)};
  font-weight: ${FontWheight[400]};
`

export const List = styled.ul`
  list-style: none;
  position: absolute;
  z-index: 20;
  padding: 20px;
  background-color: white;
  display: ${({ data }: { data: boolean }) => (data ? 'block' : 'none')};
  border-radius: 8px;
  width: calc(100% - 20px);
`

export const Item = styled.li`
  font-size: ${rem(16)};
  color: ${Colors.base.black};
  font-weight: ${FontWheight[500]};
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0px;
  }
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
