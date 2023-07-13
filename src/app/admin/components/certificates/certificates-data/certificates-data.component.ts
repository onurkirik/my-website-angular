import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Certificate } from 'src/app/models/Certificate.model';

@Component({
  selector: 'app-certificates-data',
  templateUrl: './certificates-data.component.html',
  styleUrls: ['./certificates-data.component.scss']
})
export class CertificatesDataComponent {

  _dataSource: MatTableDataSource<Certificate> = new MatTableDataSource<Certificate>();

_displayedColumns = [
  'name',
  'update',
  'delete'
]

  constructor() { }
  ngOnInit(): void { }

  public selectCertificate(element: Certificate) {

  }

  public createCertificate() {

  }

  public updateCertificate(element: Certificate) {

  }

  public deleteCertificate(element: Certificate) {

  }

}
