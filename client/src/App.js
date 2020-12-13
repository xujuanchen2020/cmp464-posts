import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import cubic from './images/cubic.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src={cubic} alt="icon" height="60" />
        <Typography className={classes.heading} variant="h2" align="center">Posts</Typography>
      </AppBar>

      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={8}>
          
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>

          <Grid item xs={12} sm={8}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>

        </Grid>
      </Container>

    </Container>
  );
};

export default App;
