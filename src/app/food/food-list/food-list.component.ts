import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Food } from './../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Food[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getFood().subscribe(res => {
      this.foods = res;
    });
  }

  getDocument() {}
}
