import { Component } from '@angular/core';
import { Category } from 'src/app/models/Category.model';

@Component({
  selector: 'app-categories-main',
  templateUrl: './categories-main.component.html',
  styleUrls: ['./categories-main.component.scss']
})
export class CategoriesMainComponent {

  selectedCategory!: Category;
  public onCategorySelected(category: Category) {
    this.selectedCategory = category;
  }


  constructor() { }
  ngOnInit(): void { }
}
