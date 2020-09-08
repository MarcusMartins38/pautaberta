import React, { FC, useEffect, useState } from 'react'
import { CgFileDocument, CgHome } from 'react-icons/cg'
import { FiUsers } from 'react-icons/fi'
import { GoCalendar } from 'react-icons/go'
import { GiCoins } from 'react-icons/gi'
import { VscGraph } from 'react-icons/vsc'
import { BsGear } from 'react-icons/bs'

import { Link, useLocation } from 'react-router-dom'

import { SideMenu, LayoutSider } from 'components'

import { HeaderLayout } from './Header'

import { logoBlueBg, logoMobile } from 'assets/images'

import { usePositionX } from 'hooks'

import {
  Layout,
  LayoutHeader,
  HeaderContent,
  LayoutContent,
  LayoutFooter,
  LayoutHeaderContent,
  SideMenuItem,
  Selected,
  Logo,
} from './styles'

export interface CollapseProps extends MenuProps {
  isCollapsed?: boolean
}

export interface MenuProps {
  align?: string
}

export const Menu: FC<MenuProps> = ({ align, children }) => {
  const location = useLocation()

  const [collapse, setCollapse] = useState(false)
  const positionX = usePositionX()

  useEffect(() => {
    setCollapse(positionX < 1000)
  }, [positionX])

  enum PATH {
    home = '1',
    processos = '2',
    clientes = '3',
    agenda = '4',
    financeiro = '5',
    relatorios = '6',
  }

  const path = location.pathname.split('/')[1]

  return (
    <Layout>
      <LayoutSider trigger={null} collapsible collapsed={collapse}>
        <LayoutHeader isCollapsed={collapse}>
          <Logo src={collapse ? logoMobile : logoBlueBg} />
        </LayoutHeader>
        <SideMenu
          defaultSelectedKeys={[PATH[path]]}
          mode="inline"
          inlineCollapsed={collapse}
          isCollapsed={collapse}
        >
          <SideMenuItem
            key="1"
            isCollapsed={collapse}
            icon={<CgHome size={25} />}
          >
            <Selected isSelected={[PATH[path]][0] === '1'} />
            <Link to="/home">Home</Link>
          </SideMenuItem>
          <SideMenuItem
            key="2"
            isCollapsed={collapse}
            icon={<CgFileDocument size={25} />}
          >
            <Selected isSelected={[PATH[path]][0] === '2'} />
            <Link to="/processos">Processos</Link>
          </SideMenuItem>
          <SideMenuItem
            key="3"
            isCollapsed={collapse}
            icon={<FiUsers size={25} />}
          >
            <Selected isSelected={[PATH[path]][0] === '3'} />
            <Link to="/clientes">Clientes</Link>
          </SideMenuItem>
          <SideMenuItem
            key="4"
            isCollapsed={collapse}
            icon={<GoCalendar size={25} />}
          >
            <Selected isSelected={[PATH[path]][0] === '4'} />
            <Link to="/agenda">Agenda</Link>
          </SideMenuItem>
          <SideMenuItem
            key="5"
            isCollapsed={collapse}
            icon={<GiCoins size={25} />}
          >
            <Selected isSelected={[PATH[path]][0] === '5'} />
            <Link to="/financeiro">Financeiro</Link>
          </SideMenuItem>
          <SideMenuItem
            key="6"
            isCollapsed={collapse}
            icon={<VscGraph size={25} />}
          >
            <Selected isSelected={[PATH[path]][0] === '6'} />
            <Link to="/relatorios">Relatórios</Link>
          </SideMenuItem>
          <SideMenuItem
            key="7"
            isCollapsed={collapse}
            icon={<BsGear size={25} />}
          >
            <Selected isSelected={[PATH[path]][0] === '7'} />
            <Link to="/configuracoes">Configurações</Link>
          </SideMenuItem>
        </SideMenu>
      </LayoutSider>

      <Layout>
        <LayoutHeaderContent>
          <HeaderLayout />
        </LayoutHeaderContent>
        <LayoutContent align={align}>{children}</LayoutContent>
        <LayoutFooter>
          Copyright © 2020 PautAberta, Todos os direitos Reservados
        </LayoutFooter>
      </Layout>
    </Layout>
  )
}
