import React, { FC } from 'react'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import { AuthService, UserServiceProps } from 'services'

import { getMin } from 'util/form'

import { Form, Input, Submit } from './styles'

const schema = object().shape({
  firstName: string().min(3, getMin(3)).required(),
  lastName: string().min(3, getMin(3)).required(),
  email: string().email().required(),
  password: string().min(6, getMin(6)).required(),
})

export const SignUp: FC = () => {
  const history = useHistory()

  const { register, handleSubmit } = useForm<UserServiceProps>({
    resolver: yupResolver(schema),
  })

  async function handleSend(data: UserServiceProps) {
    try {
      await AuthService.signUp(data)
      history.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit: SubmitHandler<UserServiceProps> = (data) => handleSend(data)

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input name="firstName" placeholder="Seu nome" ref={register} />
      <Input name="lastName" placeholder="Seu sobrenome" ref={register} />
      <Input
        name="email"
        type="email"
        placeholder="Seu e-mail"
        ref={register}
      />
      <Input
        name="password"
        type="password"
        placeholder="Sua senha"
        ref={register}
      />
      <Submit type="submit" value="Eu quero 30 dias grátis" />
    </Form>
  )
}
