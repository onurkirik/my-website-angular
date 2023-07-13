import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Certificate } from 'src/app/models/Certificate.model';
import { CertificateService } from 'src/app/services/certificate.service';

@Component({
  selector: 'app-certificates-modal',
  templateUrl: './certificates-modal.component.html',
  styleUrls: ['./certificates-modal.component.scss']
})
export class CertificatesModalComponent {

  _selectedCertificate: Certificate | undefined;
  _currentUserId: string = '8391c80b-c0f3-478d-a936-c4cf655f20cc';
  _updatedCertificate: Certificate | undefined;
  _createdCertificate: Certificate | undefined;

  _certificateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required)
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _certificateService: CertificateService,
    private _dialogRef: MatDialogRef<CertificatesModalComponent>
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this._selectedCertificate = this.data;
      this._certificateForm.setValue({
        id: this._selectedCertificate?.id || '',
        name: this._selectedCertificate?.name || ''
      });
    }
  }

  public clearForm() {
    this._certificateForm.reset();
  }

  public onSubmit() {
    if (this._selectedCertificate) {
      const formValues = this._certificateForm.value;
      this._updatedCertificate = {
        id: formValues.id || '',
        name: formValues.name || '',
        userId: this._currentUserId
      };

      try {
        this._certificateService.updateCertificate(this._updatedCertificate).subscribe();
        this._dialogRef.close();
      } catch (error) {
        console.log(error);
      }
    } else {
      const formValues = this._certificateForm.value;
      this._createdCertificate = {
        name: formValues.name || '',
        userId: this._currentUserId
      };

      try {
        this._certificateService.createCertificate(this._createdCertificate).subscribe();
        this._dialogRef.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}
