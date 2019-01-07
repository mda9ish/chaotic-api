import { Component, OnInit } from '@angular/core';

import { CardsService } from '../cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public request: String;

  constructor(public cards: CardsService) {
    this.request = 'creatures/DOP/15'

    this.cards.get('creatures/DOP/15')
  }

  ngOnInit() {
  }

  submit(): void{
    this.cards.get(this.request)
  }

}
