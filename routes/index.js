const router = require('express').Router();

const apiRoutes = require('./api');

//collect the packaged API routes and prefixing them with the path /api
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;