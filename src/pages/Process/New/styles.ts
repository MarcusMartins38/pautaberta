import styled from 'styled-components'
import { rem } from 'polished'
import { Input as InputANTD } from 'antd'
import { Colors, FontWheight, theme } from 'styles'

export const Input = styled(InputANTD)`
  padding: 20px;
  border-radius: 8px;
  color: ${Colors.grey.tint500};
  font-size: ${rem(18)};
  font-weight: ${FontWheight[400]};
`
