import { Component, Input, SimpleChanges } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/Article.model';
import { ArticleService } from 'src/app/services/article.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CategoryModalComponent } from '../category-modal/category-modal.component';
import { Category } from 'src/app/models/Category.model';

@Component({
  selector: 'app-articles-data',
  templateUrl: './articles-data.component.html',
  styleUrls: ['./articles-data.component.scss']
})
export class ArticlesDataComponent {
  @Input() selectedArticle!: Article;
  _selectedCategory: Category | undefined;
  _updatedArticle!: Article;

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
    id: new FormControl(''),
    title: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required, Validators.nullValidator]),
    content: new FormControl('', [Validators.required])
  });

  constructor(
    private _articleService: ArticleService,
    private _dialog: MatDialog,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedArticle'] && !changes['selectedArticle'].firstChange) {
      const selectedArticle = changes['selectedArticle'].currentValue as Article;
      this._selectedCategory = selectedArticle.category;
      const formValues = {
        id: selectedArticle.id || null,
        title: selectedArticle.title || null,
        categoryId: selectedArticle.categoryId || null,
        content: selectedArticle.content || null
      };
      this._articleForm.setValue(formValues);
    }
  }

  saveArticle(): void {
    if (this._articleForm.valid) {
      const formValues = this._articleForm.value;
      const updatedArticle: Article = {
        ...this.selectedArticle!,
        title: formValues.title || '',
        content: formValues.content || ''
      };


      this._articleService.updateArticle(updatedArticle).subscribe(
        (response: Article | undefined) => {
          // Güncelleme başarılı
        },
        (error: any) => {
          // Güncelleme hatası
        }
      );
    }
  }

  public showCategories(): void {
    const dialogRef = this._dialog.open(CategoryModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((selectedCategory: Category | undefined) => {
      if (selectedCategory) {
        this._selectedCategory = selectedCategory;
        this._articleForm.get('categoryId')?.setValue(this._selectedCategory.id);
      }
    });
  }

  public onSubmit() {
    if (this._articleForm.valid) {
      const formValues = this._articleForm.value;
      this._updatedArticle = {
        id: formValues.id || '',
        title: formValues.title || '',
        content: formValues.content || '',
        createdDate: this.selectedArticle.createdDate,
        updatedDate: this.selectedArticle.updatedDate,
        author: this.selectedArticle.author,
        userId: this.selectedArticle.userId,
        categoryId: formValues.categoryId || '',
        category: this._selectedCategory!
      };
  
      console.log(this._updatedArticle);

      this._articleService.updateArticle(this._updatedArticle).subscribe(
        (response: Article | undefined) => {
          console.log("Güncelleme başarılı");
        },
        (error: any) => {
          // Güncelleme hatası
        }
      );
    }
  }
  ngOnInit(): void { }

}