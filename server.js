const express = require('express');
const bodyParser = require('body-parser');
const { port } = require('./config');
const User = require('./src/controller/user/UserController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ info: 'Architect API ready.' });
});

app.post('/user/register', User.create);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});