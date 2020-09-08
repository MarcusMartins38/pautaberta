import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  explanationOf?: string
}

import { Container, Input } from './styles'

export const InputComponent: React.FC<InputProps> = ({
  explanationOf,
  ...props
}) => {
  return (
    <Container>
      <span>
        ?<p>{explanationOf}</p>
      </span>
      <Input {...props}></Input>
    </Container>
  )
}
