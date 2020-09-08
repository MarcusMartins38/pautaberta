import React, { FC } from 'react'
import { CheckboxProps } from 'antd/lib/checkbox'

type Props = CheckboxProps

import { CheckboxWrapper } from './styles'

export const Checkbox: FC<Props> = (props) => <CheckboxWrapper {...props} />
