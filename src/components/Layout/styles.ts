import styled, { css } from 'styled-components'

import { Layout } from 'antd'
import { Colors, theme } from 'styles'

export const LayoutWrapper = styled(Layout)``

export const SiderWrapper = styled(Layout.Sider)`
  background: ${Colors.white};
  min-height: 100vh;

  ${({ collapsed }) =>
    !collapsed &&
    css`
      max-width: 250px !important;
      min-width: 250px !important;
      width: 250px !important;
    `}

  box-shadow: 0 0 21px -6px ${theme.boxShadowHover};
  div ul li {
    border-bottom: 1px solid ${Colors.grey.tint100};
    margin-bottom: 0;

    :last-child {
      position: absolute;
      bottom: 0;
      height: 100px !important;
    }
  }
`

export const HeaderWrapper = styled(Layout.Header)`
  background: transparent;
  height: 150px;
  position: relative;
  padding: 15%;
`

export const ContentWrapper = styled(Layout.Content)``

export const FooterWrapper = styled(Layout.Footer)``
