import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class servizioDatabase {
  base =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/get?key=';
  key = '3bfb3112';
  URL = this.base + this.key;

  constructor(private http: HttpClient) {}

  public getData(): Observable<string> {
    return this.http.get<string>(this.URL);
  }
}
