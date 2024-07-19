const express = require('express');
const nodemailer = require('nodemailer');
const { renderToFile } = require('@react-pdf/node');
const React = require('react');
const { View, Page, Text, Image, Document, StyleSheet } = require('@react-pdf/renderer');
const QRCode = require('qrcode');
const logo = 'path_to_your_logo/logo_solo.svg';
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');

const app = express();
app.use(helmet());

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  headerText: {
    fontSize: 24,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexDirection: 'column',
    flexGrow: 1,
    color: '#000000',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
  qrCode: {
    alignSelf: 'center',
    marginTop: 20,
    width: 100,
    height: 100,
  },
});

const PDFFile = ({ name, lname, key }) => {
  const [qrCodeDataUrl, setQrCodeDataUrl] = React.useState('');

  React.useEffect(() => {
    QRCode.toDataURL(`${key}`)
      .then(url => {
        setQrCodeDataUrl(url);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <Document
      author="Whovians"
      subject="Ticket d'évènement"
      title="Billet pour Whovians Moulins"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Évènement Whovians Moulins</Text>
          <Image style={styles.image} src={logo} />
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Billet de ${name} ${lname} pour l'évènement Whovians Moulins, dédié aux fans de Doctor Who.
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: 'bold' }}>Date :</Text> 11 novembre
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: 'bold' }}>Lieu :</Text> Campus d'Epitech Moulins
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: 'bold' }}>Adresse :</Text> 9 rue de Bad Vilbel, 03000 Moulins
          </Text>
          {qrCodeDataUrl && <Image style={styles.qrCode} src={qrCodeDataUrl} />}
        </View>
      </Page>
    </Document>
  );
};

async function sendEmail(mail_to, name, lname, key) {
  const pdfPath = path.join(__dirname, 'ticket.pdf');

  // Generate the PDF and save it to a file
  await renderToFile(<PDFFile name={name} lname={lname} key={key}/>, pdfPath);

  let transporter = nodemailer.createTransport({
    host: 'smtp.whovians.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'contact@whovians.fr',
      pass: '', // Add your password here
    },
  });

  try {
    let info = await transporter.sendMail({
      from: '"Whovians Contact" <contact@whovians.fr>',
      to: mail_to,
      subject: `Confirmation inscription Whovians Moulins`,
      html: `
        <body>
          <style>
            /* Add your CSS styling here */
          </style>
          <center>
            <h2>Nous vous remercions de votre inscription à la convention Whovians Moulins.</h2>
            <img src="" alt="logo">
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
    // Remove the temporary PDF file
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

// Utilisez un port sécurisé pour le serveur HTTP, par exemple 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
