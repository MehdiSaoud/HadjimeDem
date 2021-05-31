import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class FormuleService {
  base_url = environment.api_url;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  postFormule(formule: object) {
    return this.httpClient.post(
      this.base_url + "formule",
      formule,
      this.httpOptions
    );
  }

  getAllFormule() {
    return  this.httpClient.get(
      this.base_url + 'formule',
      this.httpOptions
    );
  }
}
