import styled from 'styled-components'
import { rem } from 'polished'
import { Link as LinkRouter } from 'react-router-dom'
import { Avatar as ANTDAvatar, Typography } from 'antd'

import { Colors, FontWheight, theme } from 'styles'

export const Avatar = styled(ANTDAvatar)`
  margin-right: 10px;
`

export const Link = styled(Typography.Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.grey.tint400} !important;
  font-size: ${rem(14)};
  font-weight: ${FontWheight[500]};
`

export const LinkRouterComponent = styled(LinkRouter)`
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: space-evenly !important;
`
