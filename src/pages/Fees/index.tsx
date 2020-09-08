import React, { FC, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { paths } from '@routes/routes'

import { Menu, Table } from 'containers'

import { DivButtons, Button } from './styles'
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
    key: 'value',
    title: 'Valor',
  },
  {
    key: 'description',
    title: 'Descrição',
  },
  {
    key: 'deadline',
    title: 'Prazo',
  },
  {
    key: 'stats',
    title: 'Status',
  },
]

const Fees: FC = () => {
  const [data, setData] = useState<LawSuitServiceProps[]>()

  const { id } = useParams()

  async function getLawSuits() {
    const response = await api.get('/processos')
    setData(response.data)
  }

  useEffect(() => {
    getLawSuits()
  }, [])

  const history = useHistory()
  return (
    <Menu align="flex-end">
      <DivButtons>
        <Button back onClick={() => history.push(paths.process)}>
          Voltar
        </Button>

        <Button onClick={() => history.push(`/processos/${id}/fees/novo`)}>
          + Novo honorário
        </Button>
      </DivButtons>

      <Table
        backgroundType={false}
        buttonQuickActions={false}
        data={data}
        columns={columns}
      />
    </Menu>
  )
}

export default Fees
