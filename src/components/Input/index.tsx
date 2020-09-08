import React, { FC } from 'react'
import { InputProps } from 'antd/lib/input'

type Props = InputProps

import { InputWrapper } from './styles'

export const Input: FC<Props> = (props) => <InputWrapper {...props} />
