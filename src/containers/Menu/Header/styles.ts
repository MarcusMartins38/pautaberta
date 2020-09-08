import styled from 'styled-components'
import { rem } from 'polished'
import { Breadcrumb as ANTDBreadcrumb } from 'antd'
import { FontWheight } from 'styles'

export const Layout = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  text-transform: capitalize;
`

export const UserArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  text-transform: capitalize;
`

export const Breadcrumb = styled(ANTDBreadcrumb)`
  height: fit-content;
  font-size: ${rem(22)};
  font-weight: ${FontWheight[600]};
`
