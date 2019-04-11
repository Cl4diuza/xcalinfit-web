import { FoodStartComponent } from './food/food-start/food-start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { CalintakeComponent } from './calintake/calintake.component';
import { FoodDetailComponent } from './food/food-detail/food-detail.component';
import { FoodEditComponent } from './food/food-edit/food-edit.component';
import { ExampleComponent } from './example/example.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

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
  { path: 'calculate', component: CalintakeComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
