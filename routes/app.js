var express = require('express');
var router = express.Router();
var User = require('../models/user');



router.get('/produit/gynecap-grossesse', function (req, res, next) {
    res.render('gynecapgrossesse');
});
router.get('/produit/gynecap-conception', function (req, res, next) {
    res.render('gynecapallaitement'); 
});
router.get('/produit/gynecap-conception', function (req, res, next) {
    res.render('gynecapconception');
});

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
