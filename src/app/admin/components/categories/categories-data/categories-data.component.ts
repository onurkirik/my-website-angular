import { Component, Input, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/models/Category.model';

@Component({
  selector: 'app-categories-data',
  templateUrl: './categories-data.component.html',
  styleUrls: ['./categories-data.component.scss']
})
export class CategoriesDataComponent {
  @Input() _selectedCategory: Category | null = null;



  
  constructor() { }

  ngOnInit(): void { }
  
  ngOnChanges(changes: SimpleChanges): void { }
}
