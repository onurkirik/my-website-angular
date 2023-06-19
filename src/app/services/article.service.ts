import { Injectable } from '@angular/core';
import { BaseService } from './common/base-service.service';
import { Article } from '../models/Article.model';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    constructor(private _httpClientService: BaseService) { }

    public getAll(): Observable<Article[] | undefined> {
        return this._httpClientService.get<Article[]>({
          controller: "Articles", 
          action: "get-all"
        });
      }
      
      public getById(id: string): Observable<Article | undefined> {
        return this._httpClientService.get<Article>({
          controller: "Articles",
          action:id
        });
      }
}