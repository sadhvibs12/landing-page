var nodemailer = require('nodemailer');
var express = require('express');


var router = express.Router();

router.post('/sendemail', function (req, res, next) {
    const { name, mail, mobile, message } = req.body;

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'sadhvi.sringeri@gmail.com',
            pass: 'tzmtuzcjmuskmsia'
        }
    })
    // var logo="https://freeimage.host/i/J7PYaxp";
    var mailOption = {
        from: mail,
        to: 'sadhvi.sringeri@gmail.com',
        cc: 'adarsh.m@hexiradigital.com',
        subject: `Message From ${name}`,
        html: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                .container {
                    margin: 0 auto;
                    background-image: url(https://i.ibb.co/ySH6bpD/Microsoft-Teams-image.png) !important;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: 100%;
                    border-radius: 24px !important;
                    max-width: 600px;
                    padding: 60px;
                }
        
                .main {
                    margin: 0 auto;
                    background-color: white !important;
                    border-radius: 14px;
                    table-layout: fixed;
                    padding: 20px;
                }
        
                table {
                    width: 100%;
                    margin: 0 auto;
                }
        
                .line {
                    width: 60%;
                }
                .table-layout{
                    width: 70%;
                    margin: 0 auto;
                }
                .table-data{
                    padding: 12px;
                }
        
                td {
                    font-size: 16px;
                }
                @media (max-width: 600px){
                    .main{
                        background-color: white ;
                    }
                    .table-layout{
                        width: 100%;
                    }
                    .container{
                        padding: 30px 14px;
                    }
                    .table-data{
                        padding: 12px 5px;
                    }
                    td{
                        font-size: 14px;
                    }
                }
            </style>
        </head>
        
        <body>
            <div class="container">
                <div class="main">
                    <table>
                        <tr style="text-align: center;">
                            
                            <td><img class="logo" src="https://i.ibb.co/z8jZkHW/hexira-logo.png" alt="Logo" border="0" style="height: 25px; "/></td>
                                        </tr>
                                        <tr>
                                            <td style=" text-align: center;">
                                <h2 style="color: #0458A0;">HERE'S A NEW MESSAGE</h2>
                            </td>
                        </tr>
                        <tr>
                            <table class="table-layout">
                                <tr>
                                    <td class="table-data" style="color: #0458A0;">Name
                                        <hr>
                                    </td>
                                    <td></td>
                                    <td class="table-data" style="color: #0458A0;">${name}
                                        <hr>
                                    </td>
                                </tr>
        
                                <tr>
                                    <td class="table-data" style="color: #0458A0;">Email
                                        <hr>
                                    </td>
                                    <td></td>
                                    <td class="table-data" style="color: #0458A0;">${mail}
                                        <hr>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="table-data" style="color: #0458A0;">Phone Number
                                        <hr>
                                    </td>
                                    <td></td>
                                    <td class="table-data" style="color: #0458A0;">${mobile}
                                        <hr>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="table-data" style="color: #0458A0;">Message
                                        <hr>
                                    </td>
                                    <td></td>
                                    <td class="table-data" style="color: #0458A0;">${message}
                                        <hr>
                                    </td>
                                </tr>
                            </table>
        
                        </tr>
                      
                    </table>
                </div>
        
            </div>
        
            <div style="margin-top: 50px;">
                <h3 style="margin: 8px 0;">Warm Regards</h3>
                <h3 style="margin: 8px 0;">Pramod Shastry</h3>
                <h3 style="margin: 8px 0;">CEO of Hexira Digital</h3>
                <img src="https://i.ibb.co/z8jZkHW/hexira-logo.png" alt="Logo" style="height: 20px; " />
            </div>
        </body>
        
        </html>
                `,

    }
    transporter.sendMail(mailOption, function (err, info) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Email Sent" + info.response);
            res.redirect('http://127.0.0.1:5500/web/index.html');
        }
    })

})

module.exports = router;