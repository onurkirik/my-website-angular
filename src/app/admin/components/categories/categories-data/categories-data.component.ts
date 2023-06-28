import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/Category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-data',
  templateUrl: './categories-data.component.html',
  styleUrls: ['./categories-data.component.scss']
})
export class CategoriesDataComponent {
  @Input() _selectedCategory: Category | null = null;
  _updatedCategory!: Category;
  _createdCategory!: Category;

  _categoryForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required])
  })



  constructor(
    private _categoryService: CategoryService
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['_selectedCategory'] && !changes['_selectedCategory'].firstChange) {
      const formValues = {
        id: this._selectedCategory?.id || null,
        name: this._selectedCategory?.name || null
      };
      this._categoryForm.setValue(formValues);
    }
  }

  public clearForm() {
    this._categoryForm.reset();
  }

  public onSubmit() {
    if (this._selectedCategory) {
      if (this._categoryForm.valid) {
        const formValues = this._categoryForm.value;
        this._updatedCategory = {
          id: formValues.id || '',
          name: formValues.name || ''
        };
        this._categoryService.updateCategory(this._updatedCategory).subscribe(
          (success) => {
            this.clearForm();
          }, (err) => {
            console.log("Something get wrong");
          }
        );

      }
    } else {
      const formValues = this._categoryForm.value;
      this._createdCategory = {
        name: formValues.name || ''
      }

      this._categoryService.create(this._createdCategory).subscribe(
        (success) => {
          this.clearForm();
        }, (err) => {
          console.log("Something get wrong");
        }
      );
    }
  }

}
