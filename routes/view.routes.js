const router = require('express').Router();
const protect = require('../middlewares/auth.middleware');
const Post = require('../models/Post');
const User = require('../models/User');

router.get('/', (req, res) => res.redirect('/login'));

router.get('/login', (req, res) => res.render('pages/login', { error: undefined }));

router.get('/register', (req, res) => res.render('pages/register'));

router.get('/dashboard', protect, async (req, res) => {
  const posts = await Post.find().populate('author', 'name');
  const user = await User.findById(req.user.id);
  res.render('pages/dashboard', { posts, user });
});

router.get('/create-post', protect, (req, res) => {
  res.render('pages/createPost');
});

module.exports = router;