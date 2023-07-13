import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { SocialMediaMainComponent } from './social-media-main/social-media-main.component';
import { SocialMediaDataComponent } from './social-media-data/social-media-data.component';
import { SocialMediaFormComponent } from './social-media-form/social-media-form.component';


@NgModule({
  declarations: [
    SocialMediaMainComponent,
    SocialMediaDataComponent,
    SocialMediaFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SocialMediaMainComponent }
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
    MatInputModule
  ]
})
export class SocialMediaModule { }
