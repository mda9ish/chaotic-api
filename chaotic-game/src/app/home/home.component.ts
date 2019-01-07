import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public result: any;

  constructor() {
    this.result = JSON.parse(`{"_id":"5bee506020cc7932ef33bd0f","name":"Maxxor","set":"DOP","rarity":"Ultra Rare","id":15,"tribe":"OverWorld","courage":100,"power":65,"wisdom":80,"speed":50,"energy":60,"mugic":2,"elements":"Fire, Earth","types":"Hero","ability":"{{MC}}: Heal 10 damage to target Creature.","flavor":"No OverWorlder has ever seen Maxxor’s face in battle because he is always in the frontline, leading the charge!","brainwashed":"","unique":"1","loyal":"1","legendary":"","image":"0B6oyUfwoM3u1V3pQQk55TGtZdlE","thumb":"1MtcP0H--UeHjQHc7N5xmDWpF34myb2T5","splash":"0B6oyUfwoM3u1eDVDVjRiV082dk0","artist":"","tages":"","gender":"Male","exclusive":""}`)
  }

  ngOnInit() {
  }

}
