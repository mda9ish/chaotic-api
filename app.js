const express = require('express');
const app = express();
const port = 8080 || process.env.PORT;

const cors = require('cors');
app.use(cors())

const rateLimit = require('express-rate-limit');
app.enable('trust proxy')

const apiLimiter = rateLimit({
  windowMS: 15 * 60 * 1000,
  max: 100
})

app.use(apiLimiter)

const path = require('path');
app.use(express.static(path.join(__dirname, 'chaotic-game/dist/chaotic-game')));

const favicon = require('serve-favicon')
app.use(favicon(path.join(__dirname, 'chaotic-game/dist/chaotic-game', 'favicon.ico')))

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

  const cards = require('./routes/cards')
  app.use('/cards', cards)

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/chaotic-game/dist/chaotic-game/index.html'));
  })

  app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname + '/chaotic-game/dist/chaotic-game/index.html'));
  })

  /*
  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/chaotic-game/dist/chaotic-game'));
  })
  */

  app.get('/:set/:id', (req, res) => {
    res.sendFile(path.join(__dirname + `/chaotic-game/dist/chaotic-game/assets/${req.params.set}/${req.params.id}.png`));
  })

  app.listen(port, () => {console.log("Server Online!")})

})
