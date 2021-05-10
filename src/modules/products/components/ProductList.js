import React, { useState, useEffect } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CategoryList from './CategoryList'
import ProductItem from './ProductItem'
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
}))
function ProductList() {
  const classes = useStyles()
  const [products, setProducts] = useState([])
  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await axios.get(
        `/products`
      )
      setProducts(data)
    }
    loadProducts()
  }, [])
  return (
    <>
      <Typography variant="h3" component="h1" className={classes.title}>
        All Product
      </Typography>
      <CategoryList />
      <Grid container spacing={2}>
        {products.map((product) => (
          <ProductItem key={product.id} {...product}></ProductItem>
        ))}
      </Grid>
    </>
  )
}

export default ProductList
