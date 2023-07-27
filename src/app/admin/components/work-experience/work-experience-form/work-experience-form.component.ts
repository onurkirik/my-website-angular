import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { WorkExperience } from 'src/app/models/WorkExperience.model';
import { WorkExperienceService } from 'src/app/services/work-experience.service';

@Component({
  selector: 'app-work-experience-form',
  templateUrl: './work-experience-form.component.html',
  styleUrls: ['./work-experience-form.component.scss']
})
export class WorkExperienceFormComponent {
  @Output() formDone = new EventEmitter();
  @Input() selectedExperience: WorkExperience | undefined;
  _selectedExperience: WorkExperience | undefined;
  _createdExperience: WorkExperience | undefined;
  _updatedExperience: WorkExperience | undefined;
  _currentUserId: string = '8391c80b-c0f3-478d-a936-c4cf655f20cc';


  _experienceForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
  });

  _editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '11rem',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      }]
  };

  constructor(
    private _workExperienceService: WorkExperienceService
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedExperience'] && !changes['selectedExperience'].firstChange) {
      this._selectedExperience = this.selectedExperience;
      const formValues = {
        id: this._selectedExperience?.id || null,
        title: this._selectedExperience?.title || null,
        content: this._selectedExperience?.content || null,
        startDate: this._selectedExperience?.startDate ? new Date(this._selectedExperience.startDate).toISOString() : null,
        endDate: this._selectedExperience?.endDate ? new Date(this._selectedExperience.endDate).toISOString() : null,
      };

      this._experienceForm.setValue(formValues);

    }
  }

  public clearForm() {
    this._experienceForm.reset();
    this._experienceForm.get('content')?.setValue('');
  }

  public onSubmit() {
    if (this._selectedExperience) {
      const formValues = this._experienceForm.value;

      this._updatedExperience = {
        id: formValues.id || '',
        title: formValues.title || '',
        content: formValues.content || '',
        startDate: formValues.startDate ? new Date(formValues.startDate) : new Date(),
        endDate: formValues.endDate ? new Date(formValues.endDate) : new Date(),
        userId: this._currentUserId || ''
      };

      try {
        this._workExperienceService.updateExperience(this._updatedExperience).subscribe(
          (success) => {
            this.clearForm();
            this.formDone.emit();
          }
        )
      } catch (error) {
        console.log(error);
      }
    } else {
      const formValues = this._experienceForm.value;
      this._createdExperience = {
        title: formValues?.title || '',
        content: formValues?.content || '',
        startDate: formValues.startDate ? new Date(formValues.startDate) : new Date(),
        endDate: formValues.endDate ? new Date(formValues.endDate) : new Date(),
        userId: this._currentUserId
      }

      try {
        this._workExperienceService.createExperience(this._createdExperience).subscribe(
          (success) => {
            this.formDone.emit();
            this.clearForm();
          }
        )
      } catch (error) {
        console.log(error);
      }
    }
  }

}
