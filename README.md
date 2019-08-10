# Chaotic TCG REST API

## Getting Started

### Making an API Call

```sh
$ curl http://chaoticga.me/creatures/DOP/15
```

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

```http://chaoticga.me/DOP/15```

![maxxor card](./assets/DOP/15.png"maxxor card")

## Chaotic Cards

### ALL cards

```/cards```

### ALL cards FROM set

```/cards/DOP```

## Cards by type

### ALL card types

```/creatures```

### ALL card type FROM set

```/creatures/DOP```

### CARD FROM card type FROM set BY id

```/creatures/DOP/15```

## Card Types

|Card Type|
|:-:|
|**Creatures**|
|**Battlegear**|
|**Locations**|
|**Mugic**|
|**Attacks**|
