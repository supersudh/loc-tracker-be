const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'loc-tracker-be listening at ' + PORT });
});

app.post('/', (req, res) => {
  console.log('######');
  console.log(new Date());
  console.log(req.body);
  console.log('######');
  return res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log('loc-tracker-be listening at ' + PORT);
});