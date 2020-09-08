import React, { FC } from 'react'
import { LayoutProps } from 'antd/lib/layout'

type Props = LayoutProps

import { LayoutWrapper } from './styles'

export const Layout: FC<Props> = (props) => <LayoutWrapper {...props} />

export {
  SiderWrapper as LayoutSider,
  HeaderWrapper as LayoutHeader,
  ContentWrapper as LayoutContent,
  FooterWrapper as LayoutFooter,
} from './styles'
