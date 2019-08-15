// Express Dependency
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Cross-origin support
const cors = require('cors');
app.use(cors())

// Enable proxy connection
const rateLimit = require('express-rate-limit');
app.enable('trust proxy')

// Api Request Limiter Config
const apiLimiter = rateLimit({
  windowMS: 15 * 60 * 1000,
  max: 100
})

// Enable API Request limiter
app.use(apiLimiter)

// Serve static assets
const path = require('path');
app.use(express.static(__dirname));

// Connect to MongoDB (read only)
const mongoose = require('mongoose');
mongoose.connect('mongodb://chaotic:majortom1@ds163517.mlab.com:63517/heroku_4tp2j758', {useNewUrlParser: true});

// Establish connection to database
const db = mongoose.connection;

// Error connecting to database
db.on('error', console.error.bind(console, 'connection error:'));

// Database establishes connection
db.once('open', () => {
  
  console.log('Database connection established.')

  // Returns battlegear by set or id
  const battlegear = require('./routes/battlegear');
  app.use('/battlegear', battlegear)

  // Returns creatures by set or id
  const creatures = require('./routes/creatures');
  app.use('/creatures', creatures);

  // Returns attacks by set or id
  const attacks = require('./routes/attacks');
  app.use('/attacks', attacks)

  // Reuturns mugic by set or id
  const mugic = require('./routes/mugic');
  app.use('/mugic', mugic)

  // Locations by set and id
  const locations = require('./routes/locations')
  app.use('/locations', locations)

  // Returns all cards or cards by set
  const cards = require('./routes/cards')
  app.use('/cards', cards)

  // Return Card Image
  app.get('/:set/:id', (req, res) => {
    res.sendFile(path.join(__dirname + `/assets/${req.params.set}/${req.params.id}.png`));
  })

  // Open server
  app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)})

})