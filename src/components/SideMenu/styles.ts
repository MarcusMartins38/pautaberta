import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { Menu } from 'antd'

import { SideMenuProps } from '.'

import { Colors, FontWheight, theme } from 'styles'

export const SideMenuWrapper = styled(Menu)<SideMenuProps>`
  border: 0;
  background: transparent;

  ${({ isCollapsed }) => css`
    li > span {
      display: ${isCollapsed && 'none'};
    }

    && {
      li {
        margin: 0;
        padding: 0;
        padding-left: ${isCollapsed ? 0 : 24}px !important;
        display: flex;
        justify-content: ${!isCollapsed ? 'flex-start' : 'center'};
        align-items: center;
      }

      .ant-menu-item-selected {
        color: ${theme.secondaryLight};
        font-size: ${rem(18)};
        background: ${Colors.grey.tint100};
        span a {
          font-weight: ${FontWheight[600]};
          color: ${theme.secondaryLight};
        }
      }

      .ant-menu-item-selected:hover a {
        color: ${theme.secondaryLight};
        background: ${Colors.grey.tint100};
        span a {
          color: ${theme.secondaryLight};
        }
      }
    }
  `}
`

export const SideMenuItemWrapper = styled(Menu.Item)`
  height: 50px !important;
  color: ${Colors.grey.tint500};
  font-size: ${rem(18)};
  font-weight: ${FontWheight[400]};
  margin-bottom: 0 !important;
  padding: 30px !important;

  a {
    color: ${Colors.grey.tint500};
  }

  a:hover {
    color: ${theme.secondaryLight};
  }

  :hover {
    color: ${theme.secondaryLight};
  }

  svg {
    margin-right: 10px;
  }

  ::after {
    content: none !important;
  }
`
