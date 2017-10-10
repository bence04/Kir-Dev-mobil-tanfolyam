import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private http: Http) {}

  GetData(apiUrl) : Promise<any> {
    return this.http.get(apiUrl)
      .toPromise()
      .then(response => response.json());
  }
}
