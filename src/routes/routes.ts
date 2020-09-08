import Home from '@pages/Home'
import SignIn from '@pages/SignIn'
// Process
import Process from '@pages/Process'
import NewProcess from '@pages/Process/New'
import ResumeProcess from '@pages/Process/Resume'

//// [Honorários, Andamento, Custas, Prazos]
import Fees from '@pages/Fees'
import NewFees from '@pages/Fees/New'

import Menu from '@pages/Menu'
import Dashboard from '@pages/Dashboard'

export const paths = {
  home: '/',
  signIn: '/login',
  // Process
  process: '/processos',
  newProcess: '/processos/novo',
  processDescription: '/processos/:id',
  //// [Honorários, Andamento, Custas, Prazos]
  fees: '/processos/:id/fees',
  newFees: '/processos/:id/fees/novo',
  //
  dashboard: '/home',
  clients: '/clientes',
  calendar: '/agenda',
  financial: '/financeiro',
  reports: '/relatorios',
}

export const routes = [
  {
    path: paths.home,
    component: Home,
    exact: true,
    auth: false,
  },
  {
    path: paths.signIn,
    component: SignIn,
    exact: true,
    auth: false,
  },
  {
    path: paths.dashboard,
    component: Dashboard,
    exact: true,
    auth: true,
  },
  {
    path: paths.financial,
    component: Menu,
    exact: true,
    auth: true,
  },
  {
    path: paths.process,
    component: Process,
    exact: true,
    auth: true,
  },
  {
    path: paths.newProcess,
    component: NewProcess,
    exact: true,
    auth: true,
  },
  {
    path: paths.processDescription,
    component: ResumeProcess,
    exact: true,
    auth: true,
  },
  {
    path: paths.fees,
    component: Fees,
    exact: true,
    auth: true,
  },
  {
    path: paths.newFees,
    component: NewFees,
    exact: true,
    auth: true,
  },
]
