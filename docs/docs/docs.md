---
id: docs
title: Documentation
sidebar_label: Documentation
---

Documentation for the Chaotic Trading Card Game API.

## Getting Started

To begin with this API, let's start bt making our first API call to the server.

### Making an API Call

You can try this from your terminal.

```sh
$ curl http://www.chaoticga.me/creatures/DOP/15
```

This is the response that you should get.

```json
{
    "_id":"5c3be280775bf784097efcbf",
    "name":"Maxxor",
    "set":"DOP",
    "rarity":"Ultra Rare",
    "id":15,
    "tribe":"OverWorld",
    "courage":100,
    "power":65,
    "wisdom":80,
    "speed":50,
    "energy":60,
    "mugic":2,
    "elements":"Fire, Earth",
    "types":"Hero",
    "ability":"{{MC}}: Heal 10 damage to target Creature.",
    "flavor":"No OverWorlder has ever seen Maxxor’s face in battle because he is always in the frontline, leading the charge!","brainwashed":"",
    "unique":"1",
    "loyal":"1",
    "legendary":"",
    "artist":"",
    "gender":"Male"
}
```

### Getting card images

To get card images, use endpoints that have the set and id of the card.

```http://www.chaoticga.me/DOP/15```

If you do this that **[URL](http://www.chaoticga.me/DOP/15)**, this is what you should get.

![Chaotic Card](http://www.chaoticga.me/DOP/15)

## Chaotic Cards

The following is how to make requests for many, or certain, cards in the database. 

### Requesting all cards

To get all cards in the Chaotic Trading Card Game, make a request to this endpoint

```http://www.chaoticga.me/cards```

This will return you an array with *all* cards in the game.

### Requesting all cards by a type

You can even get all cards by their respective **[type classifications](/docs/docs#valid-parameters)**.

```http://www.chaoticga.me/creatures```

This will return you an array with *all* cards in that class.

### Filtering cards by set

To filter all cards by their respective sets, just ad the **[set id](/docs/docs#valid-parameters)** to the end of the route.

```http://www.chaoticga.me/cards/DOP```

This will return you an array with *all* cards in a particular set.

### Getting Specific Card Data

To get the data of a certain card, you must specify the cards *type*, *set*, and *id*.

```http:www.chaoticga.me/creatures/DOP/15```

This will return you the specific card's data.

## Valid Parameters

These are all valid route parameters that are accepted by the API.

### Card Types

|Card Type|
|:-:|
|```/creatures```|
|```/battlegear```|
|```/locations```|
|```/mugic```|
|```/attacks```|

### Card Sets

|Set Name|Set|
|:-:|:-:|
|Alliances Unraveled|```/AU```|
|Dawn of Perim|```/DOP```|
|Forged Unity|```/FUN```|
|Marillian Invasion|```/MI```|
|Organized Play|```/OP1```|
|Rise of the Oligarch|```/ROTO```|
|Silent Sands|```/SS```|
|Turn of the Tide|```/TOTT```|
|Zenith of the Hive|```/ZOTH```|

## Models

These are valid schemas for what you can expect to be returned for a given card's data.

### Creature

|Property|Type|Details|
|:-:|:-:|:-:|
|_id|String|Unique database id|
|Name|String|Name of the card|
|Set|String|The set id of the card|
|Rarity|String|The cards rarity in the game|
|Id|Number|The card's id number in its respective set|
|Tribe|String|The card's tribe in the game|
|Courage|Number|Average stat among the cards minimum and maximum potential value.|
|Power|Number|Average stat among the cards minimum and maximum potential value.|
|Wisdom|Number|Average stat among the cards minimum and maximum potential value.|
|Speed|Number|Average stat among the cards minimum and maximum potential value.|
|Energy|Number|Average stat among the cards minimum and maximum potential value.|
|Elements|String|Elements of the card that are comma seperated <br /> ```"Earth, Fire"```|
|Type|String|The card's type|
|Ability|String|Card's printed mechanical game text|
|Flavor|String|Card's flavor text printed|
|Unique|String|String with either ```"0"``` or ```"1"```  <br /> ```"1"``` represents ```true```|
|Loyal|String|String with either ```"0"``` or ```"1"```  <br /> ```"1"``` represents ```true```|
|Legendary|String||
|Artist|String|The card art illustrator|
|Gender|String|The creature's gender|


### Location

|Property|Type|Details|
|:-:|:-:|:-:|
|_id|String|Unique database id|
|Name|String|Name of the card|
|Set|String|The set id of the card|
|Rarity|String|The cards rarity in the game|
|Id|Number|The card's id number in its respective set|
|Initiative|String|The card's printed initiative stat|
|Ability|String|Card's printed mechanical game text|
|Flavor|String|The card's printed flavor text|
|Unique|String||
|Mirage|String||
|Past|String||
|Artist|String|The card art illustrator|

### Attack

|Property|Type|Details|
|:-:|:-:|:-:|
|_id|String|Unique database id|
|Name|String|Name of the card|
|Set|String|The set id of the card|
|Rarity|String|The cards rarity in the game|
|Id|Number|The card's id number in its respective set|
|Bp|Number|The card's build point value|
|Base|Number|The attack card's base damage|
|Fire|Number|The attack card's fire damage|
|Air|Number|The attack card's air damage|
|Earth|Number|The attack card's earth damage|
|Water|Number|The attack card's water damage|
|Ability|String|Card's printed mechanical game text|
|Flavor Text|String|The card's printed flavor text|
|Unique|String||
|Artist|String|The card art illustrator|


### Mugic

|Property|Type|Details|
|:-:|:-:|:-:|
|_id|String|Unique database id|
|Name|String|Name of the card|
|Set|String|The set id of the card|
|Rarity|String|The cards rarity in the game|
|Id|Number|The card's id number in its respective set|
|Tribe|String|The card's tribe in the game|


### Battlegear

|Property|Type|Details|
|:-:|:-:|:-:|
|_id|String|Unique database id|
|Name|String|Name of the card|
|Set|String|The set id of the card|
|Rarity|String|The cards rarity in the game|
|Id|Number|The card's id number in its respective set|

## API Limits

**The API limits all calls from original source to 100 calls every 15 minutes**