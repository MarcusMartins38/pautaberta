import React from 'react'

export interface TitleProps {
  fontSize?: number
}

import { Title as CustomTitle } from './styleds'

export const Title: React.FC<TitleProps> = ({
  fontSize = 33,
  children,
  ...props
}) => {
  return (
    <CustomTitle fontSize={fontSize} {...props}>
      {children}
    </CustomTitle>
  )
}
