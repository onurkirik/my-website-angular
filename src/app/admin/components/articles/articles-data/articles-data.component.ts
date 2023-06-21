import { Component, Input, SimpleChanges } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/Article.model';

@Component({
  selector: 'app-articles-data',
  templateUrl: './articles-data.component.html',
  styleUrls: ['./articles-data.component.scss']
})
export class ArticlesDataComponent {
  @Input() selectedArticle: Article | undefined;

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
    height: '15rem',
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

  _articleForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
    createdDate: new FormControl(null),
    updatedDate: new FormControl(null),
    content: new FormControl(null, [Validators.required])
  })

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedArticle'] && !changes['selectedArticle'].firstChange) {
      const selectedArticle = changes['selectedArticle'].currentValue;
      const formValues = {
        title: selectedArticle.title || null,
        category: selectedArticle.category.name || null,
        createdDate: selectedArticle.createdDate || null,
        updatedDate: selectedArticle.updatedDate || null,
        content: selectedArticle.content || null
      };
      this._articleForm.patchValue(formValues);
    }
  }
  ngOnInit(): void { }
}
