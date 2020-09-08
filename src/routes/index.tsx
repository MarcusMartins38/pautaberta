import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { PrivateRoute } from '@components/PrivateRoute'

import { routes } from './routes'

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) =>
          route.auth ? (
            <PrivateRoute
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ) : (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ),
        )}
      </Switch>
    </Router>
  )
}
