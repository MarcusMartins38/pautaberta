import React, { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react'

import { Container } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button'
  variant?:
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'info'
    | 'facebook'
    | 'ghost'
    | 'link'
  size?: 'icon' | 'mini' | 'small' | 'medium' | 'large'
  iconPosition?: 'right' | 'left'
  shape?: 'square' | 'circle' | 'rounded' | 'pill'
  icon?: ReactNode
  full?: boolean
}

export const Button: FC<ButtonProps> = memo(
  ({
    type = 'button' as const,
    variant = 'primary' as const,
    size = 'medium' as const,
    shape = 'rounded' as const,
    iconPosition = 'left' as const,
    icon: Icon,
    children,
    ...rest
  }) => (
    <Container
      type={type}
      variant={variant}
      size={size}
      shape={shape}
      {...rest}
    >
      {iconPosition === 'left' && Icon && Icon}
      <span>{children}</span>
      {iconPosition === 'right' && Icon && Icon}
    </Container>
  ),
)
