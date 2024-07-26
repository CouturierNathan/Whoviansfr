// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { exhibGetAll, exhibGetOne } from './exhib/manage.js';
import { userCreate } from './user/manage.js';
import { actGetAll, actGetOne } from './activities/manage.js';
import sendEmail from './mail/mailer.js';

dotenv.config();

const app = express();
app.use(express.json());

const allowedOrigin = process.env.ALLOWED_ORIGIN || '*';

const corsOptions = {
  origin: allowedOrigin,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use('/test', (req, res) => {
  res.send('Welcome to the API');
});

app.get('/exhibs', exhibGetAll);
app.get('/exhibs/:id', exhibGetOne);

app.get('/acts', actGetAll);
app.get('/acts/:id', actGetOne);

app.post('/user', userCreate);

app.post('/send-email', async (req, res) => {
  const { email, name, lname, key } = req.body;
  try {
    await sendEmail(email, name, lname, key);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
