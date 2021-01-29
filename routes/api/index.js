var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/users', require('./users'));
router.use('/user', require('./user'));
router.use('/profiles', require('./profiles'));
router.use('/tages', require('./tags'));
router.use('/articals', require('./articals'));

module.exports = router;
