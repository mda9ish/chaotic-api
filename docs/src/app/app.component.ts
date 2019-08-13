import { Component } from '@angular/core';

const server = "http://chaoticga.me/";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  endpoint = `${server}creatures/DOP/15`;

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
        console.log(this.endpoint)
      } else {
        this.endpoint = server;
      }
    }
  }
}
