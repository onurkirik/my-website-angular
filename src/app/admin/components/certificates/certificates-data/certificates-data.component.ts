import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Certificate } from 'src/app/models/Certificate.model';
import { CertificateService } from 'src/app/services/certificate.service';
import { firstValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CertificatesModalComponent } from '../certificates-modal/certificates-modal.component';

@Component({
  selector: 'app-certificates-data',
  templateUrl: './certificates-data.component.html',
  styleUrls: ['./certificates-data.component.scss']
})
export class CertificatesDataComponent {

  _dataSource: MatTableDataSource<Certificate> = new MatTableDataSource<Certificate>();
  @ViewChild(MatPaginator) _paginator!: MatPaginator;

  _certificates: Certificate[] | undefined;
  @Output() _selectedCertificate: EventEmitter<Certificate> = new EventEmitter<Certificate>();

  _displayedColumns = [
    'name',
    'update',
    'delete'
  ]

  constructor(
    private _certificateService: CertificateService,
    private _dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCertificates();
  }

  public async getCertificates() {
    try {
      const data = await firstValueFrom(this._certificateService.getAll());
      this._certificates = data;
      this._dataSource = new MatTableDataSource<Certificate>(this._certificates);
      this._dataSource.paginator = this._paginator;
    } catch (error) {
      console.log(error);
    }
  }

  public selectCertificate(element: Certificate) {
    this._selectedCertificate.emit(element);
  }

  public createCertificate() {
    const dialogRef = this._dialogRef.open(CertificatesModalComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.afterModalClosed();
    });
  }

  public updateCertificate(element: Certificate) {
    const dialogRef = this._dialogRef.open(CertificatesModalComponent, {
      data: element
    });

    dialogRef.afterClosed().subscribe(() => {
      this.afterModalClosed();
    });
  }

  public deleteCertificate(element: Certificate) {
    try {
      this._certificateService.deleteCertificate(element.id!).subscribe(
        (success) => {
          this.getCertificates();
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  public afterModalClosed() {
    this.getCertificates();
  }

}
