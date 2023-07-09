import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Article } from 'src/app/models/Article.model';
import { ArticleService } from 'src/app/services/article.service';
import { Category } from 'src/app/models/Category.model';
import { MatSelectDialogDataSource } from 'ngx-mat-select-dialog';
import { PageEvent } from '@angular/material/paginator';
import { CategoryService } from 'src/app/services/category.service';
import { AppUser } from 'src/app/models/AppUser.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-articles-data',
  templateUrl: './articles-data.component.html',
  styleUrls: ['./articles-data.component.scss']
})
export class ArticlesDataComponent {
  @Output() formDone = new EventEmitter();
  @Input() selectedArticle: Article | null = null;
  _updatedArticle!: Article;
  _createdArticle!: Article;
  _currentUserId: string = '8391c80b-c0f3-478d-a936-c4cf655f20cc';

  selectedItem: Array<any> = [];
  selectDataSource = new MatSelectDialogDataSource<Category>({
    data: [],
    displayedColumns: ['name'],
    paging: {
      enabled: true,
      mode: 'local',
      pageSize: 10,
      pageIndex: 0
    }
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
    height: '14rem',
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
    private _categoryService: CategoryService,
    private _userService: UserService
  ) {
    _categoryService.getAll().subscribe(
      (res) => {
        if (res) {
          this.selectDataSource.setData(res);
        }
      },
      (error: any) => {
      }
    );
  }

  onPage(e: PageEvent): void {
    this._categoryService.getAll().subscribe(
      (res: Category[] | undefined) => {
        if (res) {
          res.splice(0, 100);
          this.selectDataSource.setData(res);
        }
      }
    );
  }

  onFilter(f: string): void {
  }

  onDone(selected: any): void {
    this.selectedItem = selected;
  }

  customizeDisplayText(selected: Array<{ name: string }>): string {
    return selected[0]?.name || "";
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedArticle'] && !changes['selectedArticle'].firstChange) {
      this.selectDataSource.setSelected([this.selectedArticle?.category!]);
      const selectedArticle = changes['selectedArticle'].currentValue as Article;
      this.selectedItem.push(selectedArticle.category);
      console.log(this.selectedItem);
      const formValues = {
        id: selectedArticle.id || null,
        title: selectedArticle.title || null,
        categoryId: selectedArticle.categoryId || null,
        content: selectedArticle.content || null
      };
      this._articleForm.setValue(formValues);
    }
  }

  public onSubmit() {
    console.log(this.selectedItem);

    if (this.selectedArticle) {
      if (this._articleForm.valid) {
        const formValues = this._articleForm.value;
        this._updatedArticle = {
          id: formValues.id || '',
          title: formValues.title || '',
          content: formValues.content || '',
          createdDate: this.selectedArticle.createdDate,
          updatedDate: new Date(),
          userId: this.selectedArticle.userId,
          categoryId: this.selectedItem[0].id || '',
        };

        console.log(this._updatedArticle);

        this._articleService.updateArticle(this._updatedArticle).subscribe(
          (response: Article | undefined) => {
            console.log("Güncelleme başarılı");
            this.formDone.emit();
          },
          (error: any) => {
            console.log("Something went wrong");
          }
        );
        this.clearForm();
      }
    } else {
      const formValues = this._articleForm.value;
      this._createdArticle = {
        title: formValues.title || '',
        content: formValues.content || '',
        createdDate: new Date(),
        userId: this._currentUserId,
        categoryId: this.selectedItem[0].id
      }
      console.log(this._createdArticle);

      this._articleService.create(this._createdArticle).subscribe(
        (success) => {
          this.formDone.emit();
        }, (err) => {
          console.log("something get wrong");
        }
      );
      this.clearForm();
    }
  }


  clearForm() {
    this._articleForm.reset();
    this.customizeDisplayText([]);
    this._articleForm.get('content')?.setValue('');
    this.selectDataSource.setSelected([]);
    this.selectedArticle = null;
  }

  ngOnInit(): void {
  }

}