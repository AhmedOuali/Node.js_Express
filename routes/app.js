var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({}, function(err, doc){
        if (err){
            return res.send('Error!');
        }
        res.render('index', {raw: doc});
    });
    
});

router.get('/test',function(eq, res, next){
    res.send('hi');
});

router.post('/', function(req, res, next){
    
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
