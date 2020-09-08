import React from 'react'

export interface DescriptionProps {
  fontSize?: number
}

import { Description as CustomDescription } from './styles'

export const Description: React.FC<DescriptionProps> = ({
  fontSize,
  children,
  ...props
}) => {
  return (
    <CustomDescription fontSize={fontSize} {...props}>
      {children}
    </CustomDescription>
  )
}
