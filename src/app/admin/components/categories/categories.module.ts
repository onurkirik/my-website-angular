import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesMainComponent } from './categories-main/categories-main.component';
import { CategoriesSearchboxComponent } from './categories-searchbox/categories-searchbox.component';
import { CategoriesDataComponent } from './categories-data/categories-data.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';



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
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatCardModule,
  ]
})
export class CategoriesModule { }
