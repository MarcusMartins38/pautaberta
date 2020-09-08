import React, { FC } from 'react'
import { MenuProps } from 'antd/lib/menu'

import { SideMenuWrapper, SideMenuItemWrapper } from './styles'

export interface SideMenuProps extends MenuProps {
  isCollapsed?: boolean
}

export const SideMenu: FC<SideMenuProps> = (props) => (
  <SideMenuWrapper {...props} />
)

export { SideMenuItemWrapper as SideMenuItem }
