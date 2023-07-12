import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Project } from 'src/app/models/Project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss']
})
export class ProjectsFormComponent {

  @Output() formDone = new EventEmitter();
  @Input() _selectedProject: Project | null = null;

  selectedProject: Project | null = null;
  _createdProject!: Project;
  _updatedProject!: Project;
  _currentUserId: string = '8391c80b-c0f3-478d-a936-c4cf655f20cc';

  _projectForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
  });

  uploadWithCredentials = false;
  sanitize = true;
  toolbarPosition = 'top';
  toolbarHiddenButtons: string[][] = [
    ['bold', 'italic'],
    ['fontSize']
  ];

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
    private _projectService: ProjectService
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['_selectedProject'] && !changes['_selectedProject'].firstChange) {
      this.selectedProject = this._selectedProject;
      const formValues = {
        id: this._selectedProject?.id || null,
        title: this._selectedProject?.title || null,
        content: this._selectedProject?.content || null,
        startDate: this._selectedProject?.startDate ? new Date(this._selectedProject.startDate).toString() : null,
        endDate: this._selectedProject?.endDate ? new Date(this._selectedProject.endDate).toString() : null
      };

      this._projectForm.setValue(formValues);

    }
  }

  public clearForm() {
    this._projectForm.reset();
    this._projectForm.get('content')?.setValue('');
  }

  public onSubmit() {
    if (this.selectedProject) {
      if (this._projectForm.valid) {
        const formValues = this._projectForm.value;
        this._updatedProject = {
          id: formValues.id || '',
          title: formValues.title || '',
          content: formValues.content || '',
          startDate: formValues.startDate ? new Date(formValues.startDate) : new Date(),
          endDate: formValues.endDate ? new Date(formValues.endDate) : new Date(),
          userId: this._currentUserId
        };

        try {
          this._projectService.updateProject(this._updatedProject).subscribe(
            (success) => {
              this.formDone.emit();
              this.clearForm();
            }
          );
        } catch (error) {
          console.log(error);
        }

      }
    } else {
      const formValues = this._projectForm.value;

      this._createdProject = {
        title: formValues.title || '',
        content: formValues.content || '',
        startDate: formValues.startDate ? new Date(formValues.startDate) : new Date(),
        endDate: formValues.endDate ? new Date(formValues.endDate) : new Date(),
        userId: this._currentUserId || ''
      };

      this._projectService.create(this._createdProject).subscribe(
        (success) => {
          this.formDone.emit();
          this.clearForm();
        }
      );
    }
  }

}
