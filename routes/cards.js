const express = require('express');
const router = express.Router();

const Battlegear = require('../models/battlegear');
const Attack = require('../models/attack');
const Creature = require('../models/creature');
const Location = require('../models/location');
const Mugic = require('../models/mugic');

router.get('/', (req, res) => {
  let cards = [];

  Creature.find({}, (err, creatures) => {
    if(err){console.log(err)}
    creatures.forEach((creature) => {
      cards.push(creature)
    })
    Attack.find({}, (err, attacks) => {
      if(err){console.log(err)}
      attacks.forEach((attack) => {
        cards.push(attack)
      })
      Battlegear.find({}, (err, battlegears) => {
        if(err){console.log(err)}
        battlegears.forEach((battlegear) => {
          cards.push(battlegear)
        })
        Location.find({}, (err, locations) => {
          if(err){console.log(err)}
          locations.forEach((location) => {
            cards.push(location)
          })
          Mugic.find({}, (err, mugics) => {
            if(err){console.log(err)}
            mugics.forEach((mugic) => {
              cards.push(mugic)
            })
            res.send(cards)
          })
        })
      })
    })
  })
})

module.exports = router;
