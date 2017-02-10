//this file is reached on any request (any)
var express = require('express');                   
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose =require('mongoose');


var appRoutes = require('./routes/app');

var app = express();                                //creating express app (famework)
mongoose.connect('localhost:27017/node-angular');   //connecting mongoose to our database

// view engine setup
app.set('views', path.join(__dirname, 'views'));        //tel app where are our views
app.set('view engine', 'hbs');                          //view engine (setting) // to dynamically inject content into template
                                                                       
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));                                                  //
app.use(bodyParser.json());                                              // Middleware 
app.use(bodyParser.urlencoded({extended: false}));                       //
app.use(cookieParser());                                                 //
app.use(express.static(path.join(__dirname, 'public')));  // defining the public folder               

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/', appRoutes); // eny request comes to / will be forwarded to app.js

// catch 404 and forward to error handler
app.use(function (req, res, next) {           //if app.js can't handle the request or passed to next() methode , it will be returned to 
    return res.render('index');               //this function     
});


module.exports = app;
