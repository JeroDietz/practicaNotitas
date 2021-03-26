const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController')

router.get('/', indexController.home);
router.get('/crear', indexController.create);

module.exports = router;
