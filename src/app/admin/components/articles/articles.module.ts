import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesMainComponent } from './articles-main/articles-main.component';
import { RouterModule } from '@angular/router';
import { ArticlesDataComponent } from './articles-data/articles-data.component';
import { ArticlesSearchboxComponent } from './articles-searchbox/articles-searchbox.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';




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
    ]),
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule
  ]
})
export class ArticlesModule { }
