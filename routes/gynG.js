var express = require('express');
var router = express.Router();
var User = require('../models/user');



router.get('/grossesse', function (req, res, next) {
    res.render('gynecapgrossesse');
});



module.exports = router;