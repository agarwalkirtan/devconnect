const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const post = await Post.create({ ...req.body, author: req.user.id });
  res.redirect('/dashboard');
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().populate('author', 'name');
  res.json(posts);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.author.toString() !== req.user.id) {
    return res.status(403).json({ msg: 'Not authorized' });
  }
  await post.deleteOne();
  res.redirect('/dashboard');
};