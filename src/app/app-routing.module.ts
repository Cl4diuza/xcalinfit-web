import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { AuthComponent } from './auth/auth.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/foods', pathMatch: 'full' },
  { path: 'foods', component: FoodComponent},
  { path: 'auth', component: AuthComponent }
  // { path: 'signup', component: SignupComponent },
  // { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
