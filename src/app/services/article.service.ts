import { Injectable } from '@angular/core';
import { BaseService } from './common/base-service.service';
import { Article } from '../models/Article.model';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { HttpHeaders } from '@angular/common/http';

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
      action: id
    });
  }

  public updateArticle(article: Article): Observable<Article | undefined> {

    return this._httpClientService.put<Article>({
      controller: 'Articles',
      action: 'update-article'
    }, article);
  }

  public create(article: Article): Observable<Article | undefined> {
    return this._httpClientService.post<Article>({
      controller: 'Articles',
      action: 'create-article'
    }, article);
  }

  public deleteArticle(id: string): Observable<Article | undefined> {
    return this._httpClientService.delete<Article>({
      controller: 'Articles'
    }, id);
  }

}