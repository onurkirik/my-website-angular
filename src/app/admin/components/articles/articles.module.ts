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
import {AngularEditorModule} from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { CategoryModalComponent } from './category-modal/category-modal.component';
import { MatSelectDialogModule } from 'ngx-mat-select-dialog';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    ArticlesMainComponent,
    ArticlesDataComponent,
    ArticlesSearchboxComponent,
    CategoryModalComponent
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
    MatPaginatorModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectDialogModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class ArticlesModule { }
