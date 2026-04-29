const router = require('express').Router();
const protect = require('../middlewares/auth.middleware');
const User = require('../models/User');

// GET user profile
router.get('/:id', protect, async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (!user) return res.status(404).json({ msg: 'User not found' });
  res.json(user);
});

// PUT update profile
router.put('/:id', protect, async (req, res) => {
  if (req.user.id !== req.params.id) {
    return res.status(403).json({ msg: 'Not authorized' });
  }
  const updated = await User.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name, bio: req.body.bio },
    { new: true }
  ).select('-password');
  res.json(updated);
});

module.exports = router;