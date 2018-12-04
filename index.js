const http = require('http');
const express = require ('express');  //npm install express --save
const app = express();

const port = 3000;
app.listen(port, () => sendEmail())

// for Email sending you need to enable less security option .Please go to admin email and enable less security -
// here is the link-- 'https://myaccount.google.com/lesssecureapps'

//Mail Configaration
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    secure: false,
    requireTLS: true,
    auth: {
        user: 'xxxxxxxx@xxxx.xxx', //Admin Email
        pass: 'xxxxxxxx' // Admin password }
    }
    });

function sendEmail(){
    var mailbody = "< your messages here >"
    var Options = {
        from: 'xxxxxxxx@xxxx.xxx', // sender address
        to:  'xxxxxxxx@xxxx.xxx', // list of receivers
        subject: '< Your message subject is here >', // Subject line
        html:mailbody
    };
    transporter.sendMail(Options, function (error, info) {
        if (error) {
            console.log(error);
        }
        console.log('success');
    });
}