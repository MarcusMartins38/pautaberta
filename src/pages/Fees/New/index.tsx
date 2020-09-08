import React, { FC, useState, useEffect, useCallback } from 'react'
import { Col, Row } from 'antd'
import { Menu } from 'containers'
import { Container, LastInputsDiv, Button } from './styles'

import getValidationError from '../../../util/getValidationErrors'
import * as Yup from 'yup'

import { InputComponent } from '../../../components/NewInput'
import { TextAreaComponent } from '../../../components/TextArea'
import { useHistory, useParams } from 'react-router-dom'

interface DataProps {
  value: number
  description: string
  deadline: string
  stats: string
}

const NewFees: FC = () => {
  const history = useHistory()
  const { id } = useParams()

  const [value, setValue] = useState(0)
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [stats, setStats] = useState('')

  const [dataForm, setDataForm] = useState<DataProps>({} as DataProps)

  useEffect(() => {
    setDataForm({ value, description, deadline, stats })
  }, [value, description, deadline, stats])

  const handleSubmitForm = useCallback(async (data: DataProps) => {
    try {
      const schema = Yup.object().shape({
        value: Yup.number().required('Valor obrigatório'),
        description: Yup.string().required('Descrição obrigatório'),
        deadline: Yup.string().required('Prazo obrigatório'),
        stats: Yup.string(),
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      window.alert('Sucesso!')

      history.push(`/processos/${id}/fees`)
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationError(err)
        window.alert(JSON.stringify(errors))
      } else {
        window.alert(err)
      }
    }
  }, [])

  return (
    <Menu>
      <Container>
        <form>
          <InputComponent
            placeholder="Valor"
            explanationOf="It's the Price/Value"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.valueAsNumber)}
          ></InputComponent>

          <TextAreaComponent
            placeholder="Descrição"
            explanationOf="It's the description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></TextAreaComponent>

          <LastInputsDiv>
            <InputComponent
              placeholder="Prazo"
              explanationOf="It's the deadline"
              type="Date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            ></InputComponent>

            <InputComponent
              placeholder="Status"
              explanationOf="It's the Stats"
              value={stats}
              onChange={(e) => setStats(e.target.value)}
            ></InputComponent>
          </LastInputsDiv>

          <Row style={{ marginTop: 'auto', marginBottom: 20 }}>
            <Col span={4}>
              <Button
                back
                onClick={() => history.push(`/processos/${id}/fees`)}
              >
                Voltar
              </Button>
            </Col>
            <Col span={4} style={{ marginLeft: 'auto' }}>
              <Button type="button" onClick={() => handleSubmitForm(dataForm)}>
                Cadastrar
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    </Menu>
  )
}

export default NewFees
