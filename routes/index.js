const router = require('express').Router();
const userRoutes = require('./thought-routes');
const thoughtRoutes = require('./user-routes');

router.use('/api/thoughts', thoughtRoutes);
router.use('/api/users', userRoutes);

module.exports = router;