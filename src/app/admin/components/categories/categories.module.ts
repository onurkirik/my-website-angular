import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesMainComponent } from './categories-main/categories-main.component';
import { CategoriesSearchboxComponent } from './categories-searchbox/categories-searchbox.component';
import { CategoriesDataComponent } from './categories-data/categories-data.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoriesMainComponent,
    CategoriesSearchboxComponent,
    CategoriesDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CategoriesMainComponent }
    ]),
  ]
})
export class CategoriesModule { }
