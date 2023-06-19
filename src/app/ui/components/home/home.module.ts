import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageMainComponent } from './home-page-main/home-page-main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component: HomePageMainComponent},
      {path:"home", component : HomePageMainComponent}
    ]),
  ]
})
export class HomeModule { }
