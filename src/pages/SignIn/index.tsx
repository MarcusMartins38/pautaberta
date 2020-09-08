import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { AuthService } from '@services/index'
import { logoBlueBg } from '@assets/images'
import { Input, Checkbox } from 'components'
import {
  Container,
  Button,
  Card,
  Form,
  Link,
  LinkWrapper,
  InputWrapper,
} from './styles'

import { authInterceptor } from '@services/auth'

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!email || !password) {
      alert('invalid credentials')
      return
    }

    try {
      const { data } = await AuthService.signIn({ email, password })
      await localStorage.setItem('@token', data.token)
      history.push('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Card>
        <img src={logoBlueBg} onClick={() => history.push('/')} />

        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>

          <Checkbox>LEMBRE-ME</Checkbox>

          <Button shape="square" variant="warning" type="submit">
            Acessar o sistema
          </Button>
        </Form>

        <LinkWrapper>
          <Link to="#">
            <span>Esqueceu a senha?</span> Redefinir
          </Link>
          <Link to="/">
            <span>Não tem uma conta?</span> Crie agora
          </Link>
        </LinkWrapper>
      </Card>
    </Container>
  )
}

export default SignIn
