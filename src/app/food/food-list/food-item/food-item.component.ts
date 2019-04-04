import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Food } from './../../food.model';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input() food: Food;
  @Input() id: string;

  ngOnInit() {}
}
