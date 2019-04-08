import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { FoodComponent } from './food/food.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FoodDetailComponent } from './food/food-detail/food-detail.component';
import { FoodItemComponent } from './food/food-list/food-item/food-item.component';
import { CalintakeComponent } from './calintake/calintake.component';
import { FoodStartComponent } from './food/food-start/food-start.component';
import { FoodEditComponent } from './food/food-edit/food-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    FoodComponent,
    DropdownDirective,
    FoodListComponent,
    FoodDetailComponent,
    FoodItemComponent,
    CalintakeComponent,
    FoodStartComponent,
    FoodEditComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
