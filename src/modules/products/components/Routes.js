import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import ProductList from './ProductList'
import ProductDetails from './ProductDetail'
function Routes() {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}/:id`}>
        <ProductDetails />
      </Route>
      <Route path={path}>
        <ProductList />
      </Route>
    </Switch>
  )
}

export default Routes
