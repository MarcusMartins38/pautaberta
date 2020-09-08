import { AxiosResponse } from 'axios'
import api from 'services/api'

import { ClientProps } from './types'

export const ClientService = {
  store(data: ClientProps): Promise<AxiosResponse> {
    return api.post('client', data)
  },
}

export { ClientProps }
