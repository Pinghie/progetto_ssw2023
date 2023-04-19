import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class servizioDatabase {
  key = '3bfb3112';

  constructor(private http: HttpClient) {}

  public getData(): Observable<string> {
    let base =
      'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/get?key=';
    let URL = base + this.key;
    return this.http.get<string>(URL);
  }

  public setData(data: string): Observable<Object> {
    let base =
      'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/set?key=';
    let URL = base + this.key;
    return this.http.post(URL, data);
  }
}
