import { Component } from '@angular/core';

import { ChaoticApiService } from './chaotic-api.service';

const server = "http://www.chaoticga.me/";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  endpoint: string;
  imageSrc: string;

  constructor(private api: ChaoticApiService) {
    this.endpoint = `${server}creatures/DOP/15`;
    this.imageSrc = `${server}DOP/15`;
  }

  validRequest() {
    return this.endpoint.substr(0, server.length) === server;
  }

  resetContent() {
    if (!this.validRequest()) {
      this.endpoint = server;
    }
  }

  submitRequest(e) {
    if (e.keyCode === 13) {
      if (this.validRequest()) {
        this.api.getCards(this.endpoint)
          .subscribe((data: any) => {
            if(data[0]){
              console.log(
                '%c Chaotic API Results \n',
                'background-color: #D00000; color: #FFBA08; font-size: 1rem;',
                data
              )
              this.imageSrc = `${server}${data[0].set}/${data[0].id}`;
            } else {
              console.log(
                '%c Chaotic API Results \n',
                'background-color: #D00000; color: #FFBA08; font-size: 1rem;',
                data
              )
              this.imageSrc = `${server}${data.set}/${data.id}`;
            }
          })
      } else {
        this.endpoint = server;
      }
    }
  }
}
