import { ApiService } from './api.service';
import { Injectable, OnInit, EventEmitter } from '@angular/core';

import { Food } from './../food/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService implements OnInit {
  // foodSelected = new EventEmitter<Food>();

  private foods: Food[] = [
    new Food(
      '1',
      'Pizza',
      'Crispy delicious food',
      500,
      10,
      50,
      30,
      'https://c1.staticflickr.com/4/3796/9509951988_a54e5a0a18_b.jpg'
    ),
    new Food(
      '2',
      'KFC',
      'Fried chicken',
      400,
      20,
      20,
      20,
      'https://c1.staticflickr.com/4/3796/9509951988_a54e5a0a18_b.jpg'
    ),
    new Food(
      '3',
      'Porridge',
      'Bland',
      200,
      5,
      12,
      2,
      'https://c1.staticflickr.com/4/3796/9509951988_a54e5a0a18_b.jpg'
    ),
    new Food(
      '4',
      'Chicken breast',
      'raw',
      80,
      20,
      0,
      0,
      'https://c1.staticflickr.com/4/3796/9509951988_a54e5a0a18_b.jpg'
    ),
    new Food(
      '5',
      'Pork',
      'cooked',
      150,
      25,
      0,
      5,
      'https://c1.staticflickr.com/4/3796/9509951988_a54e5a0a18_b.jpg'
    )
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
