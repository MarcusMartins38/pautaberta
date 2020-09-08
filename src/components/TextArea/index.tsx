import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  explanationOf?: string
}

import { Container, TextArea } from './styles'

export const TextAreaComponent: React.FC<InputProps> = ({
  explanationOf,
  ...props
}) => {
  return (
    <Container>
      <span>
        ?<p>{explanationOf}</p>
      </span>
      <TextArea {...props}></TextArea>
    </Container>
  )
}
