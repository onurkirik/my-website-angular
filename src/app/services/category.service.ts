import { Injectable } from '@angular/core';
import { BaseService } from './common/base-service.service';
import { Observable } from 'rxjs';
import { Category } from '../models/Category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private _httpClientService: BaseService) { }

  public getAll(): Observable<Category[] | undefined> {
    return this._httpClientService.get<Category[]>({
      controller: "Categories",
      action: "get-all"
    });
  }

  public getById(id: string): Observable<Category | undefined> {
    return this._httpClientService.get<Category>({
      controller: "Category",
      action: id
    });
  }

  public create(category: Category): Observable<Category | undefined> {
    return this._httpClientService.post<Category>({
      controller: "Categories",
      action: "create-category"
    }, category);
  }

  public updateCategory(category: Category): Observable<Category | undefined> {

    return this._httpClientService.put<Category>({
      controller: 'Categories',
      action: 'update-category'
    }, category);
  }

  public deleteCategory(id: string): Observable<Category> {
    return this._httpClientService.delete<Category>({
      controller: 'Categories',
    }, id);
  }

}