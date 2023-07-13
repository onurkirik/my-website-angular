import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Skills } from 'src/app/models/Skills.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent {

  _selectedSkill: Skills | undefined;
  _currentUserId: string = '8391c80b-c0f3-478d-a936-c4cf655f20cc';
  _updatedSkill: Skills | undefined;
  _createdSkill: Skills | undefined;

  _skillsForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    rate: new FormControl('', Validators.required)
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _skillsService: SkillsService,
    private _dialogRef: MatDialogRef<SkillsFormComponent>
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this._selectedSkill = this.data;
      this._skillsForm.setValue({
        id: this._selectedSkill?.id || '',
        name: this._selectedSkill?.name || '',
        rate: this._selectedSkill?.rate.toString() || ''
      });
    }
  }

  public clearForm() {
    this._skillsForm.reset();
  }

  public onSubmit() {
    if (this._selectedSkill) {
      const formValues = this._skillsForm.value;

      this._updatedSkill = {
        id: formValues.id || '',
        name: formValues.name || '',
        rate: formValues.rate ? parseInt(formValues?.rate) : 0,
        userId: this._currentUserId
      };

      try {
        this._skillsService.updateSkill(this._updatedSkill).subscribe();
        this._dialogRef.close();
      } catch (error) {
        console.log(error);
      }
    } else {
      const formValues = this._skillsForm.value;
      this._createdSkill = {
        name: formValues.name || '',
        rate: formValues.rate ? parseInt(formValues.rate) : 0,
        userId: this._currentUserId
      };

      try {
        this._skillsService.createSkill(this._createdSkill).subscribe();
        this._dialogRef.close();
      } catch (error) {
        console.log(error);
      }
    }
  }

}
