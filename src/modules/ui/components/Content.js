import React from 'react'
import { Container, Toolbar, Snackbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2),
  },
  sn: {
    textAlign: 'center',
  },
}))
function Content() {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <Container maxWidth="lg">
        <Toolbar />

        <Snackbar
          open
          message="Helloworld"
          action={<Button color="inherit">Close</Button>}
          className={classes.sn}
        ></Snackbar>
      </Container>
    </main>
  )
}

export default Content
