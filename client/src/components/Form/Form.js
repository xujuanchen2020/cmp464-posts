import React, { useState, useEffect, useSelector } from 'react'
import { Paper, TextField, Typography, Button } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import useStyles from './styles'
import {createPost, updatePost} from '../../actions/posts'

const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
        
    });
   //const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
      }, [post]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // not get refresh from the browser
        if(currentId){
            dispatch(updatePost(currentId, postData));
        }else{
            dispatch(createPost(postData));
        }
        clear();
    }
 
    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} autoComplete='off' onSubmit={handleSubmit} >
                <Typography variant='h6'>
                {currentId ? `Editing "${post.title}"` : 'Creating a Post'} 
                </Typography>
            <TextField 
                name='creator' 
                label='name' 
                fullWidth
                value = {postData.creator}
                onChange = {(e)=>setPostData({...postData, creator:e.target.value})} />
            
            <TextField 
                name='title' 
                label='title' 
                fullWidth
                value = {postData.title}
                onChange = {(e)=>setPostData({...postData, title:e.target.value})} />

            <TextField 
                name='tags' 
                label='tags' 
                fullWidth
                value = {postData.tags}
                onChange = {(e)=>setPostData({...postData, tags:e.target.value})} />
            <div className={classes.fileInput}>
                <FileBase 
                type="file" 
                multiple={false}
                onDone={({base64})=>setPostData({...postData, selectedFile:base64})} />
            </div>

            <TextField 
                name='message' 
                variant='outlined' 
                label='message' 
                fullWidth
                value = {postData.message}
                multiline rows='3'
                onChange = {(e)=>setPostData({...postData, message:e.target.value})} />

            <Button 
                className={classes.buttonSubmit} 
                variant="contained" 
                color="primary"
                type="submit"
                fullWidth
                size="small">
                Submit
            </Button>
            <Button 
                className={classes.buttonSubmit} 
                variant="contained" 
                color="secondary"
                onClick={clear}
                fullWidth
                size="small">
                Clear
            </Button>

            </form>
        </Paper>
    )
}

export default Form
