import React, { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Layout, UserArea, Breadcrumb } from './styles'

import { User } from './User'

export interface HeaderLocationsProps {
  title: string
  path: string
}

export const HeaderLayout: FC = () => {
  const location = useLocation()
  const locations = location.pathname.split('/')
  const [newLocations, setNewLocations] = useState<HeaderLocationsProps[]>([])

  locations.shift()
  locations.unshift()

  async function getLocations() {
    let path = ''
    return await Promise.all(
      locations.map((p) => {
        path = `${path}/${p}`
        return {
          title: p.replace('/', '').charAt(0).toUpperCase() + p.slice(1),
          path,
        }
      }),
    ).then((data) => {
      setNewLocations(data)
    })
  }

  useEffect(() => {
    getLocations()
  }, [])

  return (
    <Layout>
      <Breadcrumb>
        {newLocations?.map((newLocation, key) => (
          <Breadcrumb.Item key={key}>
            <Link to={newLocation.path}>{newLocation.title}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <UserArea>
        <User />
      </UserArea>
    </Layout>
  )
}
