const express = require('express');
const router = express.Router();
const gifController = require('../controller/gif.controller');

router.get('/', gifController.getData);
router.get('/gif', gifController.getGif);
router.get('/search', gifController.findGif);

module.exports = router;