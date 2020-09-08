import React, { FC } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import { authInterceptor, AuthService } from 'services'
import api from 'services/api'

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  async function getAuthorization() {
    try {
      api.interceptors.request.use(authInterceptor)
      const { data } = await AuthService.authentication()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        getAuthorization() ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  )
}
