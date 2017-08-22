var express = require('express');
var router = express.Router();
var User = require('../models/user');



router.get('/conception', function (req, res, next) {
    res.render('gynecapconception');
});


module.exports = router;