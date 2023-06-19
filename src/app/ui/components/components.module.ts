import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageMainComponent } from './home/home-page-main/home-page-main.component';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule
  ]
})
export class ComponentsModule { }
