import React, { FC, useEffect, useState, FocusEvent } from 'react'
import { Row, Col } from 'antd'
import { useHistory } from 'react-router-dom'

import { FuzzySearch } from 'components'

import { LawSuitService } from '@services/lawsuit'
import { paths } from '@routes/routes'

import { Input, Button, Container } from './styles'
import { LawSuitAttributesProps } from '@services/lawsuit/types'
import { ClientService } from 'services'

export const ProcessForm: FC = () => {
  const history = useHistory()
  const [state, setState] = useState<any>()
  const [data, setData] = useState<LawSuitAttributesProps>()
  const [focus, setFocus] = useState('')

  function searchData(nameKey: string, array: any = []) {
    return array.find((a: any) => a.name === nameKey)
  }

  async function handleStore() {
    const lawSuit: any = {}

    const client = searchData(state.client, data?.client) || {
      name: state.client,
      type: 'CLIENT',
    }

    const partAgainst = searchData(state.partAgainst, data?.partAgainst) || {
      name: state.partAgainst,
      type: 'PART_AGAINST',
    }

    const lawyerAgainst = searchData(
      state.lawyerAgainst,
      data?.lawyerAgainst,
    ) || {
      name: state.lawyerAgainst,
      type: 'LAWYER_AGAINST',
    }

    const folder = !!searchData(state.folder, data?.folder)?.id
      ? { id: searchData(state.folder, data?.folder)?.id }
      : {
          name: state.folder,
        }

    const jurisdiction = !!searchData(state.jurisdiction, data?.jurisdiction)
      ?.id
      ? {
          id: searchData(state.jurisdiction, data?.jurisdiction)?.id,
        }
      : {
          name: state.jurisdiction,
        }

    const judicialDistrict = !!searchData(
      state.judicialDistrict,
      data?.judicialDistrict,
    )?.id
      ? {
          id: searchData(state.judicialDistrict, data?.judicialDistrict)?.id,
        }
      : {
          name: state.judicialDistrict,
        }

    const jurisdictionDegree = !!searchData(
      state.jurisdictionDegree,
      data?.jurisdictionDegree,
    )?.id
      ? {
          id: searchData(state.jurisdictionDegree, data?.jurisdictionDegree)
            ?.id,
        }
      : {
          name: state.jurisdictionDegree,
        }

    const juridicalArea = !!searchData(state.juridicalArea, data?.juridicalArea)
      ?.id
      ? {
          id: searchData(state.juridicalArea, data?.juridicalArea)?.id,
        }
      : {
          name: state.juridicalArea,
        }

    const procedure = !!searchData(state.procedure, data?.procedure)?.id
      ? {
          id: searchData(state.procedure, data?.procedure)?.id,
        }
      : {
          name: state.procedure,
        }

    const processingStick = !!searchData(
      state.processingStick,
      data?.processingStick,
    )?.id
      ? {
          id: searchData(state.processingStick, data?.processingStick)?.id,
        }
      : {
          name: state.processingStick,
        }

    const processingPlace = !!searchData(
      state.processingPlace,
      data?.processingPlace,
    )?.id
      ? {
          id: searchData(state.processingPlace, data?.processingPlace)?.id,
        }
      : {
          name: state.processingPlace,
        }

    if ('id' in client) {
      lawSuit.client = client.id
    } else {
      const { data: CLIENT } = await ClientService.store({
        name: state.client,
        type: 'CLIENT',
      })
      lawSuit.client = CLIENT.id
    }

    if ('id' in partAgainst) {
      lawSuit.partAgainst = partAgainst.id
    } else {
      const { data: PART_AGAINST } = await ClientService.store({
        name: state.partAgainst,
        type: 'PART_AGAINST',
      })
      lawSuit.partAgainst = PART_AGAINST.id
    }

    if ('id' in lawyerAgainst) {
      lawSuit.lawyerAgainst = lawyerAgainst.id
    } else {
      const { data: LAWYER_AGAINST } = await ClientService.store({
        name: state.client,
        type: 'LAWYER_AGAINST',
      })
      lawSuit.lawyerAgainst = LAWYER_AGAINST.id
    }

    const newState = {
      clientId: lawSuit.client,
      // client: lawSuit.client,
      partAgainst: lawSuit.partAgainst,
      lawyerAgainst: lawSuit.lawyerAgainst,
      processNumber: Number(state.processNumber),
      distribution: new Date().toISOString(),
      customerSituation: state.customerSituation,
      jurisdiction,
      folder,
      judicialDistrict,
      jurisdictionDegree,
      juridicalArea,
      procedure,
      processingStick,
      processingPlace,
      causeValue: state.causeValue,
    }

    await LawSuitService.store(newState)
    history.push('/processos')
  }

  async function getAttributes() {
    const { data: attributes } = await LawSuitService.attributes()
    setData(attributes)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    return setState((prevState: any) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const onFocus = (e: FocusEvent<any>) => {
    const { name } = e.target

    setFocus(name)
  }

  useEffect(() => {
    getAttributes()
  }, [])

  return (
    <Container>
      <Row gutter={[30, 20]}>
        <Col span={16}>
          <Input
            name="client"
            placeholder="Cliente"
            onChange={onChange}
            onFocus={onFocus}
            value={state?.client}
          />
          <FuzzySearch
            type="client"
            query={state?.client}
            data={data?.client}
            setValue={setState}
            focus={focus}
            setFocus={setFocus}
          />
        </Col>
        <Col span={8}>
          <Input
            name="customerSituation"
            placeholder="Situação do cliente"
            onChange={onChange}
            onFocus={onFocus}
            value={state?.customerSituation}
          />
          <FuzzySearch
            type="customerSituation"
            query={state?.customerSituation}
            data={[
              { id: 1, name: 'AUTOR' },
              { id: 2, name: 'RÉU' },
              { id: 3, name: 'TERCEIRO' },
            ]}
            setValue={setState}
            focus={focus}
            setFocus={setFocus}
            withoutAdd={false}
          />
        </Col>
      </Row>
      <Row gutter={[30, 20]}>
        <Col span={16}>
          <Input
            type="number"
            name="processNumber"
            placeholder="Processo"
            onChange={onChange}
            onFocus={onFocus}
            value={state?.processNumber}
          />
        </Col>
        <Col span={8}>
          <Input
            name="folder"
            placeholder="Pasta"
            onChange={onChange}
            onFocus={onFocus}
            value={state?.folder}
          />
          <FuzzySearch
            type="folder"
            query={state?.folder}
            data={data?.folder}
            setValue={setState}
            focus={focus}
            setFocus={setFocus}
            withoutAdd
          />
        </Col>
      </Row>
      <Row gutter={[30, 20]}>
        <Col span={12}>
          <Input
            name="partAgainst"
            placeholder="Parte Contrária"
            onChange={onChange}
            onFocus={onFocus}
            value={state?.partAgainst}
          />
          <FuzzySearch
            type="partAgainst"
            query={state?.partAgainst}
            data={data?.partAgainst}
            setValue={setState}
            focus={focus}
            setFocus={setFocus}
          />
        </Col>
        <Col span={12}>
          <Input
            name="lawyerAgainst"
            placeholder="Advogado Contrário"
            onChange={onChange}
            onFocus={onFocus}
            value={state?.lawyerAgainst}
          />
          <FuzzySearch
            type="lawyerAgainst"
            query={state?.lawyerAgainst}
            data={data?.lawyerAgainst}
            setValue={setState}
            focus={focus}
            setFocus={setFocus}
          />
        </Col>
      </Row>
      <Row gutter={[30, 20]}>
        <Col span={12}>
          <Input
            name="jurisdiction"
            placeholder="Jurisdição"
            onChange={onChange}
            onFocus={onFocus}
            value={state?.jurisdiction}
          />
          <FuzzySearch
            type="jurisdiction"
            query={state?.jurisdiction}
            data={data?.jurisdiction}
            setValue={setState}
            focus={focus}
            setFocus={setFocus}
          />
        </Col>
      </Row>
      <Row gutter={[30, 20]}>
        <Col span={8}>
          <Input
            name="processingStick"
            placeholder="Vara de Tramitação"
            onChange={onChange}
            onFocus={onFocus}
            value={state?.processingStick}
          />
          <FuzzySearch
            type="processingStick"
            query={state?.processingStick}
            data={data?.processingStick}
            setValue={setState}
            focus={focus}
            setFocus={setFocus}
          />
        </Col>
        <Col span={8}>
          <Input
            name="processingPlace"
            placeholder="Local de Tramitação"
            onChange={onChange}
            onFocus={onFocus}
            value={state?.processingPlace}
          />
          <FuzzySearch
            type="processingPlace"
            query={state?.processingPlace}
            data={data?.processingPlace}
            setValue={setState}
            focus={focus}
            setFocus={setFocus}
          />
        </Col>
        <Col span={8}>
          <Input
            name="judicialDistrict"
            placeholder="Comarca"
            onChange={onChange}
            onFocus={onFocus}
            value={state?.judicialDistrict}
          />
          <FuzzySearch
            type="judicialDistrict"
            query={state?.judicialDistrict}
            data={data?.judicialDistrict}
            setValue={setState}
            focus={focus}
            setFocus={setFocus}
          />
        </Col>
      </Row>
      <Row gutter={[30, 20]}>
        <Col span={8}>
          <Input
            name="juridicalArea"
            placeholder="Área Judicial"
            onChange={onChange}
            onFocus={onFocus}
            value={state?.juridicalArea}
          />
          <FuzzySearch
            type="juridicalArea"
            query={state?.juridicalArea}
            data={data?.juridicalArea}
            setValue={setState}
            focus={focus}
            setFocus={setFocus}
          />
        </Col>
        <Col span={8}>
          <Input
            name="procedure"
            placeholder="Procedimento"
            onChange={onChange}
            onFocus={onFocus}
            value={state?.procedure}
          />
          <FuzzySearch
            type="procedure"
            query={state?.procedure}
            data={data?.procedure}
            setValue={setState}
            focus={focus}
            setFocus={setFocus}
          />
        </Col>
        <Col span={8}>
          <Input
            name="jurisdictionDegree"
            placeholder="Gráu de Jurisdição"
            onChange={onChange}
            onFocus={onFocus}
            value={state?.jurisdictionDegree}
          />
          <FuzzySearch
            type="jurisdictionDegree"
            query={state?.jurisdictionDegree}
            data={data?.jurisdictionDegree}
            setValue={setState}
            focus={focus}
            setFocus={setFocus}
          />
        </Col>
      </Row>
      <Row gutter={[30, 20]}>
        <Col span={8}>
          <Input
            name="causeValue"
            placeholder="Valor da causa"
            onChange={onChange}
            onFocus={onFocus}
            value={state?.causeValue}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 'auto', marginBottom: 20 }}>
        <Col span={4}>
          <Button back onClick={() => history.push(paths.process)}>
            Voltar
          </Button>
        </Col>
        <Col span={4} style={{ marginLeft: 'auto' }}>
          <Button onClick={() => handleStore()}>Cadastrar</Button>
        </Col>
      </Row>
    </Container>
  )
}
