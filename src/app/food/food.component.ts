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
  constructor(private foodService: FoodService) {}

  ngOnInit() {}
}
