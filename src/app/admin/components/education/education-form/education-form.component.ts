import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/models/Education.model';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent {

  @Output() _formDone = new EventEmitter();
  @Input() selectedEducation: Education | undefined;

  _selectedEducation: Education | undefined;
  _createdEducation: Education | undefined;
  _updatedEducation: Education | undefined;
  _currentUserId: string = '8391c80b-c0f3-478d-a936-c4cf655f20cc';

  _educationForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required)
  });

  constructor(
    private _educationService: EducationService
  ) { }
  ngOnInit(): void { }

  public clearForm() {
    this._educationForm.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedEducation'] && !changes['selectedEducation'].firstChange) {
      this._selectedEducation = this.selectedEducation;
      const formValues = {
        id: this._selectedEducation?.id || null,
        title: this._selectedEducation?.title || null,
        startDate: this._selectedEducation?.startDate ? new Date(this._selectedEducation.startDate).toISOString() : null,
        endDate: this._selectedEducation?.endDate ? new Date(this._selectedEducation.endDate).toISOString() : null
      };

      this._educationForm.setValue(formValues);

    }
  }

  public onSubmit() {
    if (this.selectedEducation) {
      const formValues = this._educationForm.value;
      this._updatedEducation = {
        id: formValues.id || '',
        title: formValues.title || '',
        startDate: formValues.startDate ? new Date(formValues.startDate) : new Date(),
        endDate: formValues.endDate ? new Date(formValues.endDate) : new Date(),
        userId: this._currentUserId
      };

      try {
        this._educationService.updateEducation(this._updatedEducation).subscribe(
          (success) => {
            this._formDone.emit();
            this.clearForm();
          }
        );
      } catch (error) {
        console.log(error);
      }

    } else {
      const formValues = this._educationForm.value;
      this._createdEducation = {
        title: formValues.title || '',
        startDate: formValues.startDate ? new Date(formValues.startDate) : new Date(),
        endDate: formValues.endDate ? new Date(formValues.endDate) : new Date(),
        userId: this._currentUserId
      };


      this._educationService.create(this._createdEducation).subscribe(
        (success) => {
          this._formDone.emit();
          this.clearForm();
        }
      );

    }
  }

}

