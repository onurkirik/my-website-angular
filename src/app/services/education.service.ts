import { Injectable } from '@angular/core';
import { BaseService } from './common/base-service.service';
import { Observable, ObservableNotification } from 'rxjs';
import { Education } from '../models/Education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private _httpClientService: BaseService) { }

  public getAll(): Observable<Education[] | undefined> {
    return this._httpClientService.get<Education[]>({
      controller: "Education",
      action: "get-all"
    });
  }

  public getById(id: string): Observable<Education | undefined> {
    return this._httpClientService.get<Education>({
      controller: "Educaiton",
      action: id
    });
  }

  public create(education: Education): Observable<Education | undefined> {
    return this._httpClientService.post<Education>({
      controller: "Education",
      action: "create-education"
    }, education);
  }

  public updateEducation(education: Education): Observable<Education | undefined> {
    return this._httpClientService.put<Education>({
      controller: "Education",
      action: "update-education"
    }, education);
  }

  public deleteEducation(id: string): Observable<Education | undefined> {
    return this._httpClientService.delete<Education>({
      controller: "Education"
    }, id)
  }

}
