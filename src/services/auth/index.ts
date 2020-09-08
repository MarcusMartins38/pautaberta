import { AxiosRequestConfig, AxiosResponse } from 'axios'
import api from 'services/api'

import { UserSignInProps, UserServiceProps, UserResponseProps } from './types'

export const AuthService = {
  async signIn({ email, password }: UserSignInProps): Promise<AxiosResponse> {
    return api.post('auth/login', { email, password })
  },

  signUp(user: UserServiceProps): Promise<AxiosResponse> {
    return api.post('users', { ...user })
  },

  authentication(): Promise<AxiosResponse> {
    return api.get('auth/account')
  },
}

export const authInterceptor = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  const token = await localStorage.getItem('@token')
  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }
  return config
}

export { UserServiceProps, UserResponseProps, UserSignInProps }
