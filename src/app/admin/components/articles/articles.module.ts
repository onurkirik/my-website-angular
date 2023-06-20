import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesMainComponent } from './articles-main/articles-main.component';
import { RouterModule } from '@angular/router';
import { ArticlesDataComponent } from './articles-data/articles-data.component';
import { ArticlesSearchboxComponent } from './articles-searchbox/articles-searchbox.component';



@NgModule({
  declarations: [
    ArticlesMainComponent,
    ArticlesDataComponent,
    ArticlesSearchboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ArticlesMainComponent }
    ])
  ]
})
export class ArticlesModule { }
