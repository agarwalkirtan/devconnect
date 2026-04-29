const router = require('express').Router();
const protect = require('../middlewares/auth.middleware');
const { createPost, getAllPosts, deletePost } = require('../controllers/post.controller');

router.get('/', protect, getAllPosts);
router.post('/', protect, createPost);
router.delete('/:id', protect, deletePost);

module.exports = router;