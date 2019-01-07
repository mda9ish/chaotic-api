import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders();
headers.append('content-type', 'application/json')

const serverRoute = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  public result;

  constructor(private http: HttpClient) { }

  get(route: String): void{
    this.http.get(serverRoute + route, {headers: headers})
      .subscribe((res) => {
        this.result = res
      })
  }
}
