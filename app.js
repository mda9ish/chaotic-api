const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://henry:henry5398@ds263493.mlab.com:63493/heroku_8p4bgrc8', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  const battlegear = require('./routes/battlegear');
  app.use('/battlegear', battlegear)

  const creatures = require('./routes/creatures');
  app.use('/creatures', creatures);

  const attacks = require('./routes/attacks');
  app.use('/attacks', attacks)

  const mugic = require('./routes/mugic');
  app.use('/mugic', mugic)

  const locations = require('./routes/locations')
  app.use('/locations', locations)

  app.listen(port, () => {console.log("Server Online!")})

})
