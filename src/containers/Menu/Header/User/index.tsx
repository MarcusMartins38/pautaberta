import React, { FC, useEffect, useState } from 'react'
import { Menu, Dropdown } from 'antd'
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai'

import api from '@services/api'
import { UserProps } from 'services/auth/types'
import { authInterceptor, AuthService } from 'services'

import { Link, LinkRouterComponent } from './styles'

export const User: FC = () => {
  const [user, setUser] = useState<UserProps>()

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
    getUser()
  }, [])

  const menu = (
    <Menu>
      <Menu.Item>
        <LinkRouterComponent to="/login">
          Logout <AiOutlineLogout />
        </LinkRouterComponent>
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Link className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        {`${user?.firstName} ${user?.lastName}`}
        <AiOutlineUser style={{ marginLeft: 20 }} />
      </Link>
    </Dropdown>
  )
}
