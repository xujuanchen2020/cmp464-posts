import express from 'express';
import { getPosts, createPost, getPost, updatePost, likePost, deletePost } from '../controllers/controllers.js';

const router = express.Router();

router.get('/', getPosts);  // router.get('/', (req, res) => {res.send("Connected"));
router.post('/', createPost);  // create a post
router.get('/:id', getPost);
router.patch('/:id', updatePost); // patch is updating
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;