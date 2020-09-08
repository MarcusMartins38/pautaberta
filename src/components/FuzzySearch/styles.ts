import styled from 'styled-components'
import { rem } from 'polished'
import { Colors, FontWheight, theme } from 'styles'

export const List = styled.ul`
  list-style: none;
  position: absolute;
  z-index: 20;
  padding: 10px 0;
  background-color: white;
  display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'block' : 'none')};
  width: calc(100% - 30px);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid ${Colors.space.tint100};
`

export const Item = styled.li`
  font-size: ${rem(16)};
  color: ${Colors.base.black};
  font-weight: ${FontWheight[500]};
  margin-bottom: 10px;
  transition: all 0.2s ease-in-out;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;

  :last-child {
    margin-bottom: 0px;
  }

  :hover {
    background-color: ${Colors.grey.tint200};
  }
`
