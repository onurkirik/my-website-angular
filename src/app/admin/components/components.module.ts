import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesModule } from './articles/articles.module';
import { CategoriesModule } from './categories/categories.module';
import { ProjectsModule } from './projects/projects.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticlesModule,
    CategoriesModule,
    ProjectsModule
  ]
})
export class ComponentsModule { }
