const { exhibGetAll, exhibGetOne } = require('./exhib/manage');
const { userCreate } = require('./user/manage');
const { actGetAll, actGetOne } = require('./activities/manage');

const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

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



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
