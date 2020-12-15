import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CancelIcon from '@material-ui/icons/Cancel';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../actions/actions';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>

      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />

      <div className={classes.overlay}>
        <Typography variant="h6">
          {post.creator}
        </Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      <div className={classes.overlay2}>
        <Button style={{ color: 'beige' }} size="small" 
          onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon />
        </Button>
      </div>

      <div className={classes.details}>
        <Typography variant="body2" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      
      <Typography className={classes.title} variant="h5" component="h2">
        {post.title}
      </Typography>
      
      <CardContent>
        <Typography variant="body2" component="p">
          {post.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button style={{color: 'rgb(0,0,100)' }} size="small" 
          onClick={() => dispatch(likePost(post._id))}>
          <FavoriteIcon fontSize="small" /> 
          <span className={classes.mr10}></span>Like 
          {post.likeCount} 
        </Button>
        <Button style={{ color: 'rgb(204,48,10)' }} size="small" 
          onClick={() => dispatch(deletePost(post._id))}>
          <CancelIcon fontSize="small" /> 
          <span className={classes.mr10}></span>Delete 
        </Button>
      </CardActions>

    </Card>
  );
};

export default Post;