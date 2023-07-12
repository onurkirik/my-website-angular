import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationMainComponent } from './education-main/education-main.component';
import { RouterModule } from '@angular/router';
import { EducationDataComponent } from './education-data/education-data.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { EducationFormComponent } from './education-form/education-form.component';


@NgModule({
  declarations: [
    EducationMainComponent,
    EducationDataComponent,
    EducationFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: EducationMainComponent}
    ]),
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    AngularEditorModule,
    MatDatepickerModule,
    HttpClientModule,
    MatDividerModule,
    MatInputModule
  ]
})
export class EducationModule { }
