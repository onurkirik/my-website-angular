import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesMainComponent } from './certificates-main/certificates-main.component';
import { CertificatesDataComponent } from './certificates-data/certificates-data.component';
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


@NgModule({
  declarations: [
    CertificatesMainComponent,
    CertificatesDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CertificatesMainComponent }
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
export class CertificatesModule { }
