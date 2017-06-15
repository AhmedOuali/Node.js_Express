var express = require('express');
var router = express.Router();

var Message = require('../models/message');
var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    maxConnections : 1,
    maxMessages : 1,
    auth: {
        user: "firasetoiliste@gmail.com",
        pass: "etoiliste"
    }
});
router.post('/',function (req,res, next){
        var message = new Message({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            content: req.body.content,
        });
        message.save(function(err, result){
            if(err) {
                return res.status(500).json({
                    title: 'une erreur est survenue',
                    message: 'Votre cotribution nest pas ajouté'
                });
            }
  // setup e-mail data with unicode symbols
var mailOptions = {
    from: "firasetoiliste@gmail.com", // sender address
    to: "firas.jegham@enis.tn", // list of receivers
    subject:  req.body.subject, // Subject line
    html: "Mail:<br><h1>"+req.body.email +"</h1>" +"<br><h2>" +req.body.name+"</h2><br>"+req.body.content // html body
}
// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});
            
        
            res.status(201).json({
                title: 'succès',
                message: 'Votre contribution est envoyé avec succès'
            });
        });
});
module.exports = router;