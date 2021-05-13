import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import CartRoutes from './Cart'
function Routes() {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={path}>
        <CartRoutes />
      </Route>
    </Switch>
  )
}

export default Routes
