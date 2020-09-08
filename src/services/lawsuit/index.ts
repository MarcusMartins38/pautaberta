import { AxiosResponse } from 'axios'
import api from 'services/api'

import { LawSuitServiceProps, LawSuitServiceCreateProps } from './types'

export const LawSuitService = {
  store(data: LawSuitServiceCreateProps): Promise<AxiosResponse> {
    return api.post('law-suit', data)
  },

  index(): Promise<AxiosResponse> {
    return api.get('law-suit')
  },

  show(id: number): Promise<AxiosResponse> {
    return api.get(`law-suit/${id}`)
  },

  attributes(): Promise<AxiosResponse> {
    return api.get('law-suit/attributes')
  },
}

export { LawSuitServiceProps }
