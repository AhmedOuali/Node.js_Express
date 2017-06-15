var mongoose =require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');
var schema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    subject: {
        type: String,
        required:true
    },
    content: {
        type: String,
        required:true
    },
    
});
module.exports = mongoose.model('Message',schema);
