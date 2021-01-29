const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  dotenv = require('dotenv');
  dotenv.config();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const isAuthenticated = require('./core/middlewares/isAuthenticated') 

// routes
const users = require('./routes/user'),
      auth = require('./routes/auth')

app.use('/users', isAuthenticated, users);
app.use('/auth', auth);

app.get('/', (req, res) => {
  res.send('Hello Glints!')
})

app.listen(port, () => {
  console.log(`Glints ExpressJS App at http://localhost:${port}`)
})