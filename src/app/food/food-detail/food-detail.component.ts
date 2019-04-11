import { FoodService } from './../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Food } from './../food.model';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  food: Food;
  id: string;
  calProgessBar: string;
  proteinProgressBar: string;
  carbProgressBar: string;
  fatProgressBar: string;

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.food = this.foodService.getFood(this.id);
      this.calProgessBar = this.food.calories / 20 + '%';
      this.proteinProgressBar = this.food.protein + '%';
      this.carbProgressBar = this.food.carb + '%';
      this.fatProgressBar = this.food.fat + '%';
    });
  }

  onEditFood() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteFood() {
    this.foodService.deleteFood(this.food.id);
    this.router.navigate(['example']);
    this.router.navigate(['foods']);
  }
}
