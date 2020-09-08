import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { Moment } from 'moment'

import { CardActivity, Menu } from 'containers'

import {
  Title,
  AllProcess,
  AllProcessContainer,
  CardProcess,
  CardProcessTitle,
  CardProcessValue,
  Center,
  CalendarContainer,
  ActivitiesContainer,
  Calendar,
  Footer,
  Header,
  SeeAll,
  FooterContainer,
  FooterContent,
  Activities,
} from './styles'

const Dashboard: FC = () => {
  function onPanelChange(value: Moment, mode: string) {
    console.log(value, mode)
  }

  const history = useHistory()
  return (
    <Menu>
      <AllProcess>
        <Title>Total de Processos</Title>
        <AllProcessContainer>
          <CardProcess type="info">
            <CardProcessTitle type="info">Em andamento</CardProcessTitle>
            <CardProcessValue type="info">50</CardProcessValue>
          </CardProcess>

          <CardProcess type="success">
            <CardProcessTitle type="success">Resolvidos</CardProcessTitle>
            <CardProcessValue type="success">16</CardProcessValue>
          </CardProcess>

          <CardProcess>
            <CardProcessTitle>Abertos</CardProcessTitle>
            <CardProcessValue>43</CardProcessValue>
          </CardProcess>

          <CardProcess type="alert">
            <CardProcessTitle type="alert">Aguardando</CardProcessTitle>
            <CardProcessValue type="alert">64</CardProcessValue>
          </CardProcess>
        </AllProcessContainer>
      </AllProcess>

      <Center>
        <CalendarContainer>
          <Title>Agenda</Title>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </CalendarContainer>

        <ActivitiesContainer>
          <Header>
            <Title>Atividades do dia</Title>
            <SeeAll>Ver todos</SeeAll>
          </Header>
          <Activities>
            <CardActivity
              type="danger"
              title="Reunião PautAberta"
              description="12:00 AM - 12:30 Am"
            />
            <CardActivity
              type="alert"
              title="Reunião PautAberta"
              description="12:00 AM - 12:30 Am"
            />
            <CardActivity
              type="warning"
              title="Reunião PautAberta"
              description="12:00 AM - 12:30 Am"
            />
            <CardActivity
              type="info"
              title="Reunião PautAberta"
              description="12:00 AM - 12:30 Am"
            />
            <CardActivity
              title="Reunião PautAberta"
              description="12:00 AM - 12:30 Am"
            />
            <CardActivity
              title="Reunião PautAberta"
              description="12:00 AM - 12:30 Am"
            />
            <CardActivity
              title="Reunião PautAberta"
              description="12:00 AM - 12:30 Am"
            />
          </Activities>
        </ActivitiesContainer>
      </Center>

      <Footer>
        <FooterContainer>
          <Header>
            <Title>Últimos Processos</Title>
            <SeeAll>Ver todos</SeeAll>
          </Header>
          <FooterContent>
            <CardActivity
              min
              type="danger"
              title="91239148324"
              description="Atualizado há 20 min"
            />
            <CardActivity
              min
              type="alert"
              title="91239148324"
              description="Atualizado há 20 min"
            />
            <CardActivity
              min
              type="warning"
              title="91239148324"
              description="Atualizado há 20 min"
            />
          </FooterContent>
        </FooterContainer>

        <FooterContainer>
          <Header>
            <Title>Tarefas</Title>
            <SeeAll>Ver todos</SeeAll>
          </Header>
          <FooterContent>
            <CardActivity
              min
              type="alert"
              title="Falar com Ricardo"
              description="12:00 AM - 12:45 Am"
            />
            <CardActivity min type="warning" title="Praticar Yoga" />
            <CardActivity min type="info" title="Pagar conta de luz" />
          </FooterContent>
        </FooterContainer>
      </Footer>
    </Menu>
  )
}

export default Dashboard
