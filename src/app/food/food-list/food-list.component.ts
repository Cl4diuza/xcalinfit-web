import { FoodService } from './../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { Food } from './../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.foods = this.foodService.getFoods();
  }
}
