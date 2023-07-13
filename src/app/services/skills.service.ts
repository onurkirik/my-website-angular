import { Injectable } from '@angular/core';
import { BaseService } from './common/base-service.service';
import { Skills } from '../models/Skills.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private _httpClientService: BaseService) { }

  public getAll(): Observable<Skills[] | undefined> {
    return this._httpClientService.get<Skills[]>({
      controller: "Skills",
      action: "get-all"
    });
  }

  public createSkill(skill: Skills): Observable<Skills | undefined> {
    return this._httpClientService.post<Skills>({
      controller: "Skills",
      action: "create-skill"
    }, skill);
  }

  public updateSkill(skill: Skills): Observable<Skills | undefined> {
    return this._httpClientService.put<Skills>({
      controller: "Skills",
      action: "update-skill"
    }, skill);
  }

  public deleteSkill(id: string): Observable<Skills | undefined> {
    return this._httpClientService.delete<Skills>({
      controller: "Skills"
    }, id);
  }

}
