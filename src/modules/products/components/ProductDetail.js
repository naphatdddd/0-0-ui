import React, { useState, useEffect } from 'react'
import { Grid, Paper, Typography, ButtonGroup, Button } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    content: {
        height: '100%'
    },
    amountContainer: {
        marginBottom: theme.spacing(2),
      },
      amount: {
        padding: theme.spacing(0, 2),
      },
}))
function ProductDetail() {
  const id = '1'
  const theme = useTheme()
  const isMediumUp = useMediaQuery(theme.breakpoints.up('md'))
  const classes = useStyles()
  const [products, setProducts] = useState([])
  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await axios.get(
        `/products/${id}`
      )
      setProducts(data)
    }
    loadProducts()
  }, [])
  return (
    <>
      <Paper className={classes.root}>
        <Grid container spacing={2} justify={isMediumUp ? 'flex-start' : 'center'}>
          <Grid item>
            <img src={products.image} alt={products.name} />
          </Grid>
          <Grid item>
            <Grid container className={classes.content} direction='column' justify='space-between'>
              <Grid item>
                <Typography variant="h4" component="h1">
                  {products.name}
                </Typography>
                <p>{products.desc}</p>
              </Grid>
              <Grid item>
                <ButtonGroup
                  variant="contained"
                  color="primary"
                  arial-label="primary button group"
                >
                  <Button>Bye Now</Button>
                  <Button>Add To Cart</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default ProductDetail
