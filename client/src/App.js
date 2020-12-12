import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'
import cubic from './images/cubic.png'
import Form from './Form/Form'
import Posts from './Posts/Posts'
import useStyles from './styles'

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(()=>{ dispatch(getPosts());}, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant='h2' align='center'>
        <img className={classes.image} src={cubic} alt='logo' height='60' width='60' align='center'/>
        Posts
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
