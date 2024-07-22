const { View, Page, Text, Image, Document, StyleSheet } = require('@react-pdf/renderer');
const QRCode = require('qrcode');
const logo = '../website/src/assets/logo_solo.svg';

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

export default PDFFile;