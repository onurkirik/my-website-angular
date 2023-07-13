import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceMainComponent } from './work-experience-main/work-experience-main.component';
import { WorkExperienceDataComponent } from './work-experience-data/work-experience-data.component';
import { WorkExperienceFormComponent } from './work-experience-form/work-experience-form.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import {AngularEditorModule} from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    WorkExperienceMainComponent,
    WorkExperienceDataComponent,
    WorkExperienceFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WorkExperienceMainComponent }
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
    MatDatepickerModule,
    HttpClientModule,
    MatDividerModule,
    MatInputModule,
    AngularEditorModule
  ]
})
export class WorkExperienceModule { }
