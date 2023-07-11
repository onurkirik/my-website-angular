import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsMainComponent } from './projects-main/projects-main.component';
import { ProjectsDataComponent } from './projects-data/projects-data.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ProjectsFormComponent } from './projects-form/projects-form.component';
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



@NgModule({
  declarations: [
    ProjectsMainComponent,
    ProjectsDataComponent,
    ProjectsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProjectsMainComponent }
    ]),
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule,
    AngularEditorModule,
    MatButtonModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule
  ]
})
export class ProjectsModule { }
