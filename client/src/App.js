import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'
import cubic from './images/cubic.png'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import useStyles from './styles'

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(()=>{ dispatch(getPosts());}, [currentId, dispatch]);

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
            <Grid item xs={12} sm={3}>
              <Form currentId={currentId} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
