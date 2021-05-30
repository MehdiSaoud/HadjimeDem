import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  base_url = environment.api_url;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

   postQuote(quote:object) {
    return  this.httpClient.post(
      this.base_url + 'quote/' + quote,
      this.httpOptions
    );
  }
}
