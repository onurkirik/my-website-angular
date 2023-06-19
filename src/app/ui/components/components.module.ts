import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageMainComponent } from './home/home-page-main/home-page-main.component';
import { HomeModule } from './home/home.module';
import { RegisterModule } from './register/register.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    RegisterModule
  ]
})
export class ComponentsModule { }
