import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChaoticApiService {

  constructor(private http: HttpClient) {

  }

  public getCards(endpoint: string) {
    return this.http.get(endpoint);
  }

}
