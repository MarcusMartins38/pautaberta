import styled, { css } from 'styled-components'
import { rem } from 'polished'

import {
  Layout as LayoutComponent,
  LayoutContent as LayoutContentComponent,
  LayoutFooter as LayoutFooterComponent,
  LayoutHeader as LayoutHeaderComponent,
  SideMenuItem as SideMenuItemComponent,
} from 'components'

import { Colors, theme } from 'styles'

import { CollapseProps } from '.'

export const Layout = styled(LayoutComponent)`
  min-height: 100vh;
  background-color: ${Colors.base.background};
`

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`

export const LayoutHeader = styled(LayoutHeaderComponent)<CollapseProps>`
  padding: ${({ isCollapsed }) => isCollapsed && '45% 15%'};
`

export const LayoutContent = styled(LayoutContentComponent)<CollapseProps>`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  ${({ align }) =>
    !!align &&
    css`
      align-items: ${align};
    `}
`

export const LayoutHeaderContent = styled(LayoutHeaderComponent)<CollapseProps>`
  height: 80px;
  padding: 0;
`

export const HeaderContent = styled(LayoutHeaderComponent)<CollapseProps>`
  height: 80px;
  padding: 0 20px;
  font-size: ${rem(22)};
`

export const LayoutFooter = styled(LayoutFooterComponent)<CollapseProps>`
  text-align: center;
  background-color: ${Colors.base.background};
`

export const SideMenuItem = styled(SideMenuItemComponent)<CollapseProps>`
  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      svg {
        margin-right: 0;
      }
    `}
`

export const Selected = styled.div`
  width: 8px;
  height: 100%;
  background: linear-gradient(
    0,
    ${Colors.base.secondary.tint400} 0%,
    ${Colors.base.primary.tint100} 100%
  );
  left: 0;
  position: absolute;
  display: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? 'block' : 'none'};
  top: 0;
`
