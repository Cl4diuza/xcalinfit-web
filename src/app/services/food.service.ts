import { ApiService } from './api.service';
import { Injectable, OnInit, EventEmitter } from '@angular/core';

import { Food } from './../food/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService implements OnInit {
  foodSelected = new EventEmitter<Food>();

  private foods: Food[] = [
    new Food('1', 'Pizza', 'Calories: 500'),
    new Food('2', 'KFC', 'Calories: 450')
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  getFoods() {
    // this.apiService.getFood().subscribe(res => {
    //   this.foods = res;
    // });

    return this.foods.slice();
  }

  getFood(id: string) {
    return this.foods.find(x => x.id === id);
  }
}
