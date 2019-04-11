import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Food } from './../food/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService implements OnInit {
  private headers: any;
  private foods: Food[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  public setFoods(foods) {
    this.foods = foods;
  }

  public getFood(id: string) {
    return this.foods.find(x => x.id === id);
  }

  public getFoods(): Observable<Food[]> {
    const headers = new HttpHeaders();
    this.headers = headers.set('Content-Type', 'appplication/json');

    return this.http.get<Food[]>('http://localhost:40010/food/all', {
      headers: this.headers
    });
  }

  public createFood(foods) {
    const headers = new HttpHeaders();
    this.headers = headers.set('Content-Type', 'appplication/json');

    this.http.post('http://localhost:40010/food/create', foods).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('POST Error', error);
      }
    );
  }

  public deleteFood(id: string) {
    const headers = new HttpHeaders();
    this.headers = headers.set('Content-Type', 'appplication/json');

    this.http.delete('http://localhost:40010/food/delete/' + id).subscribe(
      data => {
        console.log('DEL Request is successful ', data);
      },
      error => {
        console.log('DEL Error', error);
      }
    );
  }
}
