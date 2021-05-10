import React from 'react'
import {
  AppBar,
  Toolbar,
  Link,
  FormControlLabel,
  Switch,
  Badge,
  IconButton,
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import logo from 'assets/image/logo.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
  },
  logoImage: {
    width: 35,
    height: 35,
  },
  logoLink: {
    marginRight: theme.spacing(2),
  },
  spacer: {
    flex: 1,
  },
}))
function Header() {
  const classes = useStyles()
  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Link
            href="/"
            color="inherit"
            underline="none"
            className={classes.logoLink}
          >
            <img src={logo} alt="Naphat" className={classes.logoImage} />
          </Link>
          <Link href="/preducts" color="inherit" underline="none">
            Products
          </Link>
          <div className={classes.spacer}></div>
          <FormControlLabel
            control={<Switch color="secondary" />}
            label="Dark"
          ></FormControlLabel>
          <IconButton>
            <Badge badgeContent={5} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
