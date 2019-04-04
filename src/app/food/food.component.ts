import { Component, OnInit } from '@angular/core';

import { FoodService } from './../services/food.service';
import { Food } from './food.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers: [FoodService]
})
export class FoodComponent implements OnInit {
  selectedFood: Food;

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.foodService.foodSelected.subscribe((food: Food) => {
      this.selectedFood = food;
    });
  }
}
