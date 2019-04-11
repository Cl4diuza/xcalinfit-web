import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Food } from './../food.model';
import { FoodService } from '../../shared/services/food.service';

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
    private router: Router,
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
    let id: string;

    if (this.editMode) {
      id = this.foodForm.controls.id.value;
    } else {
      id = null;
    }

    const name: string = this.foodForm.controls.name.value;
    const content: string = this.foodForm.controls.content.value;
    const cal: number = this.foodForm.controls.cal.value;
    const protein: number = this.foodForm.controls.protein.value;
    const carb: number = this.foodForm.controls.carb.value;
    const fat: number = this.foodForm.controls.fat.value;
    const imagePath: string = this.foodForm.controls.imagePath.value;

    const newFood = new Food(
      id,
      name,
      content,
      cal,
      protein,
      carb,
      fat,
      imagePath
    );

    this.foodService.createFood(newFood);

    this.router.navigate(['foods']);
  }

  onCancel() {
    this.router.navigate(['foods']);
  }

  private initForm() {
    let foodId = '';
    let foodName = '';
    let foodImagePath = '';
    let foodContent = '';
    let foodCalories;
    let foodProtein;
    let foodCarb;
    let foodFat;

    if (this.editMode) {
      foodId = this.food.id;
      foodName = this.food.name;
      foodImagePath = this.food.imagePath;
      foodContent = this.food.content;
      foodCalories = this.food.calories;
      foodProtein = this.food.protein;
      foodCarb = this.food.carb;
      foodFat = this.food.fat;
    }

    this.foodForm = new FormGroup({
      id: new FormControl(foodId),
      name: new FormControl(foodName),
      imagePath: new FormControl(foodImagePath),
      content: new FormControl(foodContent),
      cal: new FormControl(foodCalories),
      protein: new FormControl(foodProtein),
      carb: new FormControl(foodCarb),
      fat: new FormControl(foodFat)
    });
  }
}
