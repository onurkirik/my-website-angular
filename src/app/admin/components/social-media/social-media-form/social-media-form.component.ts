import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SocialMedia } from 'src/app/models/SocialMedia.model';
import { SocialMediaService } from 'src/app/services/social-media.service';

@Component({
  selector: 'app-social-media-form',
  templateUrl: './social-media-form.component.html',
  styleUrls: ['./social-media-form.component.scss']
})
export class SocialMediaFormComponent {

  _selectedSocialMedia: SocialMedia | undefined;
  _currentUserId: string = '8391c80b-c0f3-478d-a936-c4cf655f20cc';
  _updatedSocialMedia: SocialMedia | undefined;
  _createdSocialMedia: SocialMedia | undefined;

  _socialMediaForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required)
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _socialMediaService: SocialMediaService,
    private _dialogRef: MatDialogRef<SocialMediaFormComponent>) { }

  ngOnInit(): void {
    if (this.data) {
      this._selectedSocialMedia = this.data;
      this._socialMediaForm.setValue({
        id: this._selectedSocialMedia?.id || '',
        name: this._selectedSocialMedia?.name || '',
        link: this._selectedSocialMedia?.link || ''
      });
    }
  }

  public clearForm() {
    this._socialMediaForm.reset();
  }

  public onSubmit() {
    if (this._selectedSocialMedia) {
      const formValues = this._socialMediaForm.value;

      this._updatedSocialMedia = {
        id: formValues.id || '',
        name: formValues.name || '',
        link: formValues.link || '',
        userId: this._currentUserId
      };

      try {
        this._socialMediaService.updateSocialMedia(this._updatedSocialMedia).subscribe();
        this._dialogRef.close();
      } catch (error) {
        console.log(error);
      }
    } else {
      const formValues = this._socialMediaForm.value;
      this._createdSocialMedia = {
        name: formValues.name || '',
        link: formValues.link || '',
        userId: this._currentUserId
      };

      try {
        this._socialMediaService.createSocialMedia(this._createdSocialMedia).subscribe();
        this._dialogRef.close();
      } catch (error) {
        console.log(error);
      }
    }
  }

}
