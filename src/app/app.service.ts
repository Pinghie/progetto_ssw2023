import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class servizioDatabase {
  constructor(private http: HttpClient) {}

  baseURL =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/';
  key = '3bfb3112';

  public getData(): Observable<string> {
    let URL = this.baseURL + 'get?key=' + this.key;
    return this.http.get<string>(URL);
  }

  public setData(data: string): Observable<Object> {
    let URL = this.baseURL + 'set?key=' + this.key;
    return this.http.post(URL, data);
  }
}
