import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { paths } from '@routes/routes'

import { Menu, Table } from 'containers'

import { Button } from './styles'
import { LawSuitService } from '@services/lawsuit'
import { LawSuitServiceProps } from '@services/lawsuit/types'
import api from '@services/api'

export interface ProcessDescriptionProps {
  id: string
  name: string
  date: string
  phone: string
  email: string
  status: string[]
}

const columns = [
  {
    key: 'processNumber',
    title: 'Número do processo',
  },
  {
    key: 'client',
    title: 'Cliente',
  },
  {
    key: 'createdAt',
    title: 'Data de criação',
  },
  {
    key: 'label',
    title: 'Prioridade',
  },
]

const Process: FC = () => {
  const [data, setData] = useState<LawSuitServiceProps[]>()

  async function getLawSuits() {
    // const { data: lawsuits } = await LawSuitService.index()
    // setData(lawsuits)
    const response = await api.get('/processos')
    setData(response.data)
  }

  useEffect(() => {
    getLawSuits()
  }, [])

  const history = useHistory()
  return (
    <Menu align="flex-end">
      <Button onClick={() => history.push(paths.newProcess)}>
        + Novo Processo
      </Button>
      <Table data={data} columns={columns} />
    </Menu>
  )
}

export default Process
