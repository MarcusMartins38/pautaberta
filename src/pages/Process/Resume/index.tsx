import React, { FC, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Col, Row } from 'antd'
import { paths } from '@routes/routes'

import api from '@services/api'
import { Menu, CardActivity } from 'containers'
import { UserProps } from 'services/auth/types'
import { LawSuitService } from 'services/lawsuit'
import { authInterceptor, AuthService } from 'services'
import { LawSuitServiceGetProps } from 'services/lawsuit/types'

import {
  Container,
  Content,
  Title,
  Description,
  Label,
  Activities,
  ActivitiesContainer,
  SeeAll,
  Header,
  Center,
  Footer,
  ActivitiesDivContent,
  Button,
} from './styles'

const Resume: FC = () => {
  const history = useHistory()
  const [lawsuit, setLawsuit] = useState<LawSuitServiceGetProps>()
  const [user, setUser] = useState<UserProps>()
  const params = useParams<{ id: string }>()

  async function getLawSuit() {
    console.log(params.id)

    try {
      // const { data } = await LawSuitService.show(Number(params.id))
      const { data } = await api.get('LawSuitServiceGetProps', {
        params: { id: params.id },
      })
      console.log(data[0])

      setLawsuit(data[0])
    } catch (error) {
      // history.push('/processos')
      console.log(error)
    }
  }

  async function getUser() {
    try {
      api.interceptors.request.use(authInterceptor)
      const { data } = await AuthService.authentication()
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLawSuit()
    getUser()
  }, [])

  return (
    <Menu>
      <Container>
        <Row gutter={[30, 20]}>
          <Col span={16}>
            <Label type={'info'}>{'info'}</Label>
          </Col>
        </Row>
        <Row gutter={[30, 20]}>
          <Col span={6}>
            <Content>
              <Title>Processo:</Title>
              <Description>{lawsuit?.process_number}</Description>
            </Content>
          </Col>
          <Col span={6}>
            <Content>
              <Title>Responsável:</Title>
              <Description>{`${user?.firstName} ${user?.lastName}`}</Description>
            </Content>
          </Col>
          <Col span={6}>
            <Content>
              <Title>Cliente:</Title>
              <Description>{lawsuit?.client.name}</Description>
            </Content>
          </Col>
          <Col span={6}>
            <Content>
              <Title>Situação do cliente:</Title>
              <Description>{lawsuit?.customer_situation}</Description>
            </Content>
          </Col>
        </Row>
        <Row gutter={[30, 20]}>
          <Col span={6}>
            <Content>
              <Title>Pasta:</Title>
              <Description>{lawsuit?.folder.name}</Description>
            </Content>
          </Col>
          <Col span={6}>
            <Content>
              <Title>Jurisdição:</Title>
              <Description>{lawsuit?.jurisdiction.name}</Description>
            </Content>
          </Col>
          <Col span={6}>
            <Content>
              <Title>Número do cliente:</Title>
              <Description>Não possui</Description>
            </Content>
          </Col>
          <Col span={6}>
            <Content>
              <Title>E-mail do cliente:</Title>
              <Description>Não possui</Description>
            </Content>
          </Col>
        </Row>
        <Row gutter={[30, 20]}>
          <Col span={6}>
            <Content>
              <Title>Parte contrária:</Title>
              <Description>{lawsuit?.partAgainst.name}</Description>
            </Content>
          </Col>
          <Col span={6}>
            <Content>
              <Title>Advogado contrário:</Title>
              <Description>{lawsuit?.lawyerAgainst.name}</Description>
            </Content>
          </Col>
          <Col span={6}>
            <Content>
              <Title>Vara de tramitação:</Title>
              <Description>{lawsuit?.processingStick.name}</Description>
            </Content>
          </Col>
          <Col span={6}>
            <Content>
              <Title>Local de tramitação:</Title>
              <Description>{lawsuit?.processingPlace.name}</Description>
            </Content>
          </Col>
        </Row>
        <Row gutter={[30, 20]} justify="space-between">
          <Col span={4}>
            <Content>
              <Title>Área Jurídica:</Title>
              <Description>{lawsuit?.juridicalArea.name}</Description>
            </Content>
          </Col>
          <Col span={4}>
            <Content>
              <Title>Procedimento:</Title>
              <Description>{lawsuit?.procedure.name}</Description>
            </Content>
          </Col>
          <Col span={4}>
            <Content>
              <Title>Gráu de jurisdição:</Title>
              <Description>{lawsuit?.jurisdictionDegree.name}</Description>
            </Content>
          </Col>
          <Col span={4}>
            <Content>
              <Title>Comarca:</Title>
              <Description>{lawsuit?.judicialDistrict.name}</Description>
            </Content>
          </Col>
          <Col span={4}>
            <Content>
              <Title>Valor da causa:</Title>
              <Description>{lawsuit?.cause_value}</Description>
            </Content>
          </Col>
        </Row>

        <Center>
          <ActivitiesContainer id="first_bigger">
            <Header>
              <Title>Andamento:</Title>
              <SeeAll>Ver todos</SeeAll>
            </Header>
            <Activities>
              <CardActivity
                title="Levado a justiça"
                description="Informacao do andamento de acordo com o que pegar da api"
                date="20/08/2020"
              />
              <CardActivity
                title="Levado a justiça"
                description="Informacao do andamento de acordo com o que pegar da api"
                date="20/08/2020"
              />
              <CardActivity
                title="Levado a justiça"
                description="Informacao do andamento de acordo com o que pegar da api"
                date="20/08/2020"
              />
              <CardActivity
                title="Levado a justiça"
                description="Informacao do andamento de acordo com o que pegar da api"
                date="20/08/2020"
              />
            </Activities>
          </ActivitiesContainer>

          <ActivitiesContainer>
            <Header>
              <Title>Prazos:</Title>
              <SeeAll>Ver todos</SeeAll>
            </Header>
            <Activities>
              <CardActivity
                type="danger"
                title="Reunião com amanda"
                time="16:30"
                description="Entregar documento para decla... "
              />
              <CardActivity
                type="alert"
                title="Reunião com amanda"
                time="16:30"
                description="Entregar documento para decla... "
              />
              <CardActivity
                type="warning"
                title="Reunião com amanda"
                time="16:30"
                description="Entregar documento para decla... "
              />
              <CardActivity
                type="info"
                title="Reunião com amanda"
                time="16:30"
                description="Entregar documento para decla... "
              />
              <CardActivity
                title="Reunião com amanda"
                time="16:30"
                description="Entregar documento para decla... "
              />
              <CardActivity
                title="Reunião com amanda"
                time="16:30"
                description="Entregar documento para decla... "
              />
              <CardActivity
                title="Reunião com amanda"
                time="16:30"
                description="Entregar documento para decla... "
              />
            </Activities>
          </ActivitiesContainer>
        </Center>

        <Footer>
          <ActivitiesDivContent>
            <ActivitiesContainer className="style_only_container">
              <Header>
                <Title>Honorários</Title>
                <SeeAll>Ver todos</SeeAll>
              </Header>
              <Activities>
                <CardActivity
                  type="danger"
                  date="20/08/2020"
                  title="R$ 1.000"
                  contrast="PENDENTE"
                />
                <CardActivity
                  type="info"
                  date="20/08/2020"
                  title="R$ 1.000"
                  contrast="PAGO"
                />
                <CardActivity
                  type="warning"
                  date="20/08/2020"
                  title="R$ 1.000"
                  contrast="PENDENTE"
                />
                <CardActivity
                  type="info"
                  date="20/08/2020"
                  title="R$ 1.000"
                  contrast="PENDENTE"
                />
              </Activities>
            </ActivitiesContainer>

            <ActivitiesContainer className="style_only_container">
              <Header>
                <Title>Custos</Title>
                <SeeAll>Ver todos</SeeAll>
              </Header>
              <Activities>
                <CardActivity
                  title="R$ 50"
                  date="20/08/2020"
                  contrast="Gasolina"
                />
                <CardActivity
                  title="R$ 100"
                  date="20/08/2020"
                  contrast="Consulta"
                />
                <CardActivity
                  date="20/08/2020"
                  title="R$ 150"
                  contrast="Consulta"
                />
                <CardActivity
                  date="20/08/2020"
                  title="R$ 200"
                  contrast="Gasolina"
                />
              </Activities>
            </ActivitiesContainer>

            <ActivitiesContainer className="style_only_container">
              <Header>
                <Title>Histórico</Title>
                <SeeAll>Ver todos</SeeAll>
              </Header>
              <Activities>
                <CardActivity
                  title="Honorário"
                  date="20/08/2020"
                  description="Descrição: Foi pago o valor de R$1.000"
                />
                <CardActivity
                  title="Andamento"
                  date="20/08/2020"
                  description="Descrição: Foi pago o valor de R$1.000"
                />
                <CardActivity
                  title="Andamento"
                  date="20/08/2020"
                  description="Descrição: Foi pago o valor de R$1.000"
                />
                <CardActivity
                  title="Honorário"
                  date="20/08/2020"
                  description="Descrição: Foi pago o valor de R$1.000"
                />
              </Activities>
            </ActivitiesContainer>
          </ActivitiesDivContent>

          <Row style={{ marginTop: 'auto', marginBottom: 20 }}>
            <Col span={4}>
              <Button back onClick={() => history.push(paths.process)}>
                Voltar
              </Button>
            </Col>
            <Col span={4} style={{ marginLeft: 'auto' }}>
              <Button type="button">Finalizar</Button>
            </Col>
          </Row>
        </Footer>
      </Container>
    </Menu>
  )
}

export default Resume
