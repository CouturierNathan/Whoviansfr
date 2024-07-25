const express = require('express');
const nodemailer = require('nodemailer');
const { renderToFile } = require('@react-pdf/node');
const React = require('react');
const PDFFile = require('./PDFFile'); // Assure-toi que l'import fonctionne
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
app.use(helmet());

async function sendEmail(mail_to, name, lname, key) {
  const pdfPath = path.join(__dirname, 'ticket.pdf');

  await renderToFile(<PDFFile name={name} lname={lname} key={key} />, pdfPath);

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    requireTLS: true,
    // auth: {
    //   user: process.env.SMTP_USER,
    //   pass: process.env.SMTP_PASS,
    // },
  });

  try {
    let info = await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: mail_to,
      subject: `Confirmation inscription Whovians Moulins`,
      html: `
        <body>
          <style>
            #body {
              display:flex;
              flex-direction:column;
              max-height:100vh
            }
            h3 {
              text-decoration:underline
            }
            h2 {
              font-weight:1
            }
            p {
              font-size:1em
            }
            strong {
              text-decoration:underline;
              font-size:1.2em
            }
            .Footer {
              display:flex;
              justify-content:center;
              align-items:center;
              height:100px;
              margin-top:15px;
              border-top:2px solid #c7c5c5
            }
            .Footer .container {
              display:flex;
              justify-content:center;
              align-items:center;
              width:100%;
              height:100%
            }
            .Footer .container .contact {
              display:flex;
              justify-content:center;
              align-items:center;
              width:90%;
              flex-direction:column;
              align-content:center;
              flex-wrap:nowrap
            }
            .Footer .container .separator {
              background-color:#c7c5c5;
              margin-top:5%;
              margin-bottom:5%;
              height:90%;
              width:.6%;
              border-radius:60px
            }
            .socialmedia {
              display:flex;
              justify-content:space-between;
              align-items:center;
              flex-direction:row;
              align-content:center;
              flex-wrap:nowrap
            }
            .social a img {
              width:30px;
              height:30px;
              margin:5px
            }
          </style>
          <center>
            <h2>Nous vous remercions de votre inscription à la convention Whovians Moulins.</h2>
            <img src="http://whovians.fr/static/media/logo_solo.ad8dec602d95f47d9adc33fd2bd2d934.svg" alt="logo">
          </center>
          <div id="body">
            <h2>Bonjour ${name}</h2>
            <p>Nous avons le plaisir de vous confirmer votre inscription à l'évènement Whovians Moulins, qui aura lieu le 11 novembre.</p>
            <p>Voici les détails de l'évènement :</p>
            <ul>
              <li><h3>Date:</h3>11 Novembre</li>
              <li><h3>Lieu:</h3>Campus Epitech Moulins</li>
              <li><h3>Adresse:</h3>9 rue de Bad Vilbel, 03000 Moulins</li>
            </ul>
            <p>L'évènement à lieu le<strong>11 Novembre 2024</strong>au campus Epitech de Moulins : 9 rue de Bad Vilbel, 03000 Moulins.</p>
            <p>Nous sommes ravis de vous accueillir pour cette journée dédiée aux fans de Doctor Who. Vous pourrez participer à diverses activités, rencontres et ateliers autour de notre série préférée.</p>
            <p>N'oubliez pas d'apporter votre bonne humeur et votre passion pour Doctor Who. Si vous avez des questions ou des besoins spécifiques, n'hésitez pas à nous contacter.</p>
            <p>Nous vous remercions pour votre inscription et nous avons hâte de vous voir le 11 novembre.</p>
            <p>Cordialement,</p>
          </div>
          <div class="Footer">
            <div class="container">
              <div class="contact">
                <h5>Mail:</h5><a href="mailto:contact@whovians.fr">contact@whovians.fr</a>
              </div>
              <div class="separator"></div>
              <div class="contact">
                <h5>Adresse:</h5><a href="https://www.google.com/maps/place/Ecole+informatique+Moulins+-+Epitech/@46.5425055,3.338948,16z/data=!3m1!4b1!4m6!3m5!1s0x47f11d415baa7817:0x8dde37e9942f8126!8m2!3d46.5425055!4d3.3415229!16s%2Fg%2F11qmmfytc4?entry=ttu" target="blank">9 rue de Bad Vilbel, 03000 Moulins</a>
              </div>
              <div class="separator"></div>
              <div class="contact">
                <h5>Réseaux sociaux:</h5>
                <div class="socialmedia">
                  <div class="social">
                    <a href="https://www.instagram.com/whovians.fr/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="instagram"></a>
                  </div>
                  <div class="social">
                    <a href="https://www.facebook.com/profile.php?id=61561717794230" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png" alt="facebook"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      `,
      attachments: [
        {
          filename: 'ticket.pdf',
          path: pdfPath,
          contentType: 'application/pdf',
        },
      ],
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.log(mail_to);
    console.error('Error sending email:', error);
  } finally {
    fs.unlinkSync(pdfPath);
  }
}

app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { email, name, lname, key } = req.body;
  try {
    await sendEmail(email, name, lname, key);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SMTP Server is running on port ${PORT}`);
});
