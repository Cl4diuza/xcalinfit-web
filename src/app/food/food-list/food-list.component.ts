import { Router, ActivatedRoute } from '@angular/router';
import { FoodService } from '../../shared/services/food.service';
import { Component, OnInit } from '@angular/core';
import { Food } from './../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit() {
    this.foodService.getFoods().subscribe(res => {
      this.foods = res;
      this.foodService.setFoods(res);
    });
  }

  onNewFood() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
