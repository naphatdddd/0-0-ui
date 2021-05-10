import React from 'react'
import { CssBaseline } from '@material-ui/core'

import Header from './Header'
import Content from './Content'

import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'

function Layout() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#81e9e6',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Content />
    </ThemeProvider>
  )
}

export default Layout