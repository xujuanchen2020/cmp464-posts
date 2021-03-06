import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/actions';

const Form = ({ currentId, setCurrentId }) => {

  const [postData, setPostData] = useState({ 
    creator: '', 
    title: '', 
    message: '', 
    tags: '', 
    selectedFile: '', 
  });

  const post = useSelector((state) => 
        (currentId ? state.posts.find((message) => 
        message._id === currentId) : null));

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => { 
    if (post) 
      setPostData(post); 
    }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  const clear = () => {
    setCurrentId(0);
    setPostData({ 
      creator: '', 
      title: '', 
      message: '', 
      tags: '', 
      selectedFile: '' 
    });
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate 
        className={`${classes.root} ${classes.form}`} 
        onSubmit={handleSubmit}>

        <Typography variant='h6'>
          {currentId ? `Edit "${post.title}"` : 'Create a Post'} 
        </Typography>

        <TextField name="creator" label="Name" fullWidth value={postData.creator} 
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />

        <TextField name="title" label="Title" fullWidth value={postData.title} 
          onChange={(e) => setPostData({ ...postData, title: e.target.value })} />

        <TextField name="tags" label="Tags" fullWidth value={postData.tags} 
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />

        <TextField name="message" label="Message" fullWidth 
          multiline rows={3} value={postData.message} 
          onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} 
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>

        <Button className={classes.buttonSubmit} variant="contained" size="small" type="submit" fullWidth> 
          Submit 
        </Button>

        <Button className={classes.buttonClear} variant="contained" size="small" onClick={clear} fullWidth> 
          Clear
        </Button>

      </form>
    </Paper>
  );
};

export default Form;