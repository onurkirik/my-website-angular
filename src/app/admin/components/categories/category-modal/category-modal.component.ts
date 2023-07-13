import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/models/Category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss']
})
export class CategoryModalComponent {
  _selectedCategory: Category | null = null;

  _categoryForm = new FormGroup({
    'id': new FormControl(''),
    'name': new FormControl('', Validators.required)
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _categoryService: CategoryService,
    private _dialogRef: MatDialogRef<CategoryModalComponent>
  ) { }
  ngOnInit(): void {
    if (this.data) {
      this._selectedCategory = this.data;
      this._categoryForm.setValue({
        id: this._selectedCategory?.id || '',
        name: this._selectedCategory?.name || ''
      });
    }

  }

  public clearForm() {
    this._categoryForm.reset();
  }

  public onSubmit() {
    if (this._selectedCategory) {
      const formValues = this._categoryForm.value;
      const updatedCategory = {
        id: formValues.id || '',
        name: formValues.name || ''
      };

      try {
        this._categoryService.updateCategory(updatedCategory).subscribe();
        this._dialogRef.close();
      } catch (error) {
        console.log(error);
      }
    } else {
      const formValues = this._categoryForm.value;
      const createdCategory = {
        name: formValues.name || ''
      };

      try {
        this._categoryService.create(createdCategory).subscribe();
        this._dialogRef.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}
