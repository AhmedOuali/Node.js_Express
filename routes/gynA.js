var express = require('express');
var router = express.Router();
var User = require('../models/user');



router.get('/allaittement', function (req, res, next) {
    res.render('gynecapallaittement');
});


module.exports = router;