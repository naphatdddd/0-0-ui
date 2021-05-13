import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductRoutes from 'modules/products/components/Routes'
import CartRoutes from 'modules/cart/components/Routes'

function Routes() {
  return (
    <Switch>
      <Route path="/products">
        <ProductRoutes />
      </Route>
      <Route path="/cart">
        <CartRoutes />
      </Route>
      <Route exact path="/"></Route>
    </Switch>
  )
}

export default Routes
