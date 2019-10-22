const express = require('express');
const router = express.Router();

router.use('/api/gif', require('./gif.router'));

module.exports = router;