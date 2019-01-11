import { Component, OnInit } from '@angular/core';

const MAXXOR_DATA = JSON.parse(`{
"_id": "5bee506020cc7932ef33bd0f",
"name": "Maxxor",
"set": "DOP",
"rarity": "Ultra Rare",
"id": 15,
"tribe": "OverWorld",
"courage": 100,
"power": 65,
"wisdom": 80,
"speed": 50,
"energy": 60,
"mugic": 2,
"elements": "Fire, Earth",
"types": "Hero",
"ability": "{{MC}}: Heal 10 damage to target Creature.",
"flavor": "No OverWorlder has ever seen Maxxor’s face in battle because he is always in the frontline, leading the charge!",
"brainwashed": "",
"unique": "1",
"loyal": "1",
"legendary": "",
"image": "0B6oyUfwoM3u1V3pQQk55TGtZdlE",
"thumb": "1MtcP0H--UeHjQHc7N5xmDWpF34myb2T5",
"splash": "0B6oyUfwoM3u1eDVDVjRiV082dk0",
"artist": "",
"tages": "",
"gender": "Male",
"exclusive": ""
}`)
const SETS_DATA = [
  {id:'DOP', name: 'Dawn of Perim'},
  {id:'ZOTH', name: 'Zenith of the Hive'},
  {id: 'OP1', name: 'Organized Play 1'},
  {id: 'SS', name: 'Silent Sands'},
  {id: 'MI', name: 'M\'arrillian Invasion'},
  {id: 'ROTO', name: 'Rise of the Oligarch'},
  {id: 'TOTT', name: 'Turn of the Tide'},
  {id: 'FUN', name: 'Forged Unity'},
  {id: 'AU', name: 'Aliances Unraveled'},
  {id: 'LR', name: 'League Rewards'}
]

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  public maxxor: String;
  public sets;

  constructor() {
    this.maxxor = MAXXOR_DATA;
    this.sets = SETS_DATA;
  }

  ngOnInit() {
  }

}
