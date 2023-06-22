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
}