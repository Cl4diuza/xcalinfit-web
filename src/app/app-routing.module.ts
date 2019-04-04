import { FoodStartComponent } from './food/food-start/food-start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { CalintakeComponent } from './calintake/calintake.component';
import { FoodDetailComponent } from './food/food-detail/food-detail.component';
import { FoodEditComponent } from './food/food-edit/food-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/foods', pathMatch: 'full' },
  {
    path: 'foods',
    component: FoodComponent,
    children: [
      { path: '', component: FoodStartComponent },
      { path: 'new', component: FoodEditComponent },
      { path: ':id', component: FoodDetailComponent },
      { path: ':id/edit', component: FoodEditComponent }
    ]
  },
  { path: 'calculate', component: CalintakeComponent }
  // { path: 'signup', component: SignupComponent },
  // { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
