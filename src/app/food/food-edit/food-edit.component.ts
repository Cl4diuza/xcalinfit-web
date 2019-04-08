import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Food } from './../food.model';
import { FoodService } from './../../services/food.service';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit {
  food: Food;
  id: string;
  editMode = false;
  foodForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.editMode = params.id != null;
      this.food = this.foodService.getFood(this.id);
      this.initForm();
    });
  }

  onSubmit() {
    console.log(this.foodForm);
  }

  private initForm() {
    let foodName = '';
    let foodContent = '';
    let foodCalories;
    let foodProtein;
    let foodCarb;
    let foodFat;

    if (this.editMode) {
      foodName = this.foodService.getFood(this.id).name;
      foodContent = this.foodService.getFood(this.id).content;
      foodCalories = this.foodService.getFood(this.id).calories;
      foodProtein = this.foodService.getFood(this.id).protein;
      foodCarb = this.foodService.getFood(this.id).carb;
      foodFat = this.foodService.getFood(this.id).fat;
    }

    this.foodForm = new FormGroup({
      name: new FormControl(foodName),
      content: new FormControl(foodContent),
      cal: new FormControl(foodCalories),
      protein: new FormControl(foodProtein),
      carb: new FormControl(foodCarb),
      fat: new FormControl(foodFat)
    });
  }
}
