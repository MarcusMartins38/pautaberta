export interface UserServiceProps {
  firstName: string
  lastName: string
  email: string
  password: string
}
export type UserSignInProps = Pick<UserServiceProps, 'email' | 'password'>

export interface UserResponseProps {
  token: string
  user: UserProps
}

export interface UserProps {
  id: number
  email: string
  firstName: string
  lastName: string
  avatar: string
  college: string
  collegeTerm: string
  lawyerRegistration: string
  lawyerRegistrationState: string
  phone: string
  gender: string
  type: string
  stateId: number
  cityId: number
  createdAt: string
  updatedAt: string
  city_id: number
  state_id: number
}
