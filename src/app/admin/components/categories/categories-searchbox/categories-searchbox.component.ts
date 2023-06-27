import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/Category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-searchbox',
  templateUrl: './categories-searchbox.component.html',
  styleUrls: ['./categories-searchbox.component.scss']
})
export class CategoriesSearchboxComponent {

  _categories: Category[] | undefined;
  @Output() _selectedCategory: EventEmitter<Category> = new EventEmitter<Category>();

  _displayedColumns: string[] = [
    'name'
  ];

  _dataSource: MatTableDataSource<Category> = new MatTableDataSource<Category>();
  @ViewChild(MatPaginator) _paginator!: MatPaginator;

  constructor(
    private _categoryService: CategoryService
  ) { }
    
  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories() {
    this._categoryService.getAll().subscribe(
      (success) => {
        this._categories = success;
        this._dataSource = new MatTableDataSource<Category>(this._categories);
        this._dataSource.paginator = this._paginator;
      },
      (err) => {
        console.log("Something get wrong");
      }
    );
  }

  public selectCategory(category: Category) {
    this._selectedCategory.emit(category);
  }

}
