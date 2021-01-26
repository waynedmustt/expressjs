const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  dotenv = require('dotenv');
  dotenv.config();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
const users = require('./routes/user')

app.use('/users', users);

app.get('/', (req, res) => {
  res.send('Hello Glints!')
})

app.listen(port, () => {
  console.log(`Glints ExpressJS App at http://localhost:${port}`)
})