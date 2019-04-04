import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Food } from './../food/food.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private headers: any;

  constructor(private http: HttpClient) {}

  public getFood(): Observable<Food[]> {
    const headers = new HttpHeaders();
    this.headers = headers.set('Content-Type', 'appplication/json');

    return this.http.get<Food[]>('http://localhost:40010/food/all', {
      headers: this.headers
    });
  }

  public CreateFood() {
    this.http
      .put('http://127.0.0.1:3000/customers/1', {
        name: 'NewCustomer001',

        email: 'newcustomer001@email.com',

        tel: '0000252525'
      })
      .subscribe(
        data => {
          console.log('PUT Request is successful ', data);
        },
        error => {
          console.log('Rrror', error);
        }
      );
  }
}
