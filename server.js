require('dotenv').config();

const express = require('express'); //needed to launch server
const cors = require('cors'); //needed to disable sendgrid security
const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails 
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 4000


const app = express(); //alias from the express function

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (request, response) => {
      response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }
//require('dotenv').load();
//sendgrid api key
//sgMail.setApiKey(process.env.SENDGRID_KEY);
sgMail.setApiKey("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");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!


sgMail.setApiKey('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')
app.post('/api/email', (req, res, next) => {
    const msg = {
        to: 'carolina.e.klein@gmail.com',
        from: req.body.email,
        subject: req.body.subject,
        text: req.body.message
    }

    try {
        sgMail.send(msg)
        .then(res => {
            console.log(res)
           
        })
        .catch(err => {
            console.log('error: ', err);
            
        });

        res.status(200).json({
            success: true
        });
    } catch(e) {
        res.send(e.toString())
    }
   
});


app.listen(port, () => console.log("Running on Port 4000"));