const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/api/thoughts', thoughtRoutes);
router.use('/api/users', userRoutes);

module.exports = router;