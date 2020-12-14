import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Form from './components/Form/Form';
import PostContainer from './components/PostContainer/PostContainer';
import { getPosts } from './actions/actions';
import useStyles from './styles';
import cubic from './images/cubic.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch(); // hook, dispatch actions
  const classes = useStyles();

  useEffect(() => {//get post from actions.js and dispatch
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src={cubic} alt="icon" width="60" height="60" />
        <Typography className={classes.heading} variant="h2" align="center">Post A Post</Typography>
      </AppBar>

      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>

          <Grid item xs={12} sm={7}>
            <PostContainer setCurrentId={setCurrentId} />
          </Grid>

        </Grid>
      </Container>

    </Container>
  );
};

export default App;
