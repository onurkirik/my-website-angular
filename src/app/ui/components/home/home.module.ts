import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageMainComponent } from './home-page-main/home-page-main.component';
import { RouterModule } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { BaseService } from 'src/app/services/common/base-service.service';



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
  ], 
  providers: [
    BaseService,
    ArticleService
  ]
})
export class HomeModule { }
