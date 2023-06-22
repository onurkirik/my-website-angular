import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/Category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss']
})
export class CategoryModalComponent {
  _categories: Category[] | undefined;
  _displayedColumns: string[] = [
    'name',
  ];
  _dataSource: MatTableDataSource<Category> = new MatTableDataSource<Category>();
  _selectedCategory: Category | undefined;

  constructor(
    private _categoryService: CategoryService,
    private dialogRef: MatDialogRef<CategoryModalComponent>
  ) { }
  ngOnInit(): void {
    this.getAllCategories();
  }

  public getAllCategories() {
    this._categoryService.getAll().subscribe(
      (success) => {
        this._categories = success;
        this._dataSource = new MatTableDataSource<Category>(this._categories);
      }, (err) => {
        console.log("someting get wrong");
      }
    )
  }

  public selectCategory(category: Category) {
    this._selectedCategory = category;
    this.dialogRef.close(this._selectedCategory);
  }

}
