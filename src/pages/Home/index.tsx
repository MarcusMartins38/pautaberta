import React, { FC } from 'react'

import {
  Nav,
  Price,
  Doubt,
  Header,
  Contact,
  TheSystem,
  LawyerSite,
  TotalIntegration,
} from 'containers/Home'
import { Page, Container } from './styles'

const Home: FC = () => {
  return (
    <Page>
      <Nav />
      <Container>
        <Header />
      </Container>
      <TheSystem />
      <TotalIntegration />
      <Doubt />
      <Price />
      <LawyerSite />
      <Contact />
    </Page>
  )
}

export default Home
