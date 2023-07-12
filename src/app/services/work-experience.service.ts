import { Injectable } from '@angular/core';
import { BaseService } from './common/base-service.service';
import { Observable } from 'rxjs';
import { WorkExperience } from '../models/WorkExperience.model';
import { _Schedule } from '@angular/cdk/table';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor(private _httpClientModule: BaseService) { }

  public getExperiences(): Observable<WorkExperience[] | undefined> {
    return this._httpClientModule.get<WorkExperience[]>({
      controller: "WorkExperience",
      action: "get-all"
    });
  }

  public createExperience(experience: WorkExperience): Observable<WorkExperience | undefined> {
    return this._httpClientModule.post<WorkExperience>({
      controller: "WorkExperience",
      action: "create-work-experience"
    }, experience);
  }

  public updateExperience(experience: WorkExperience): Observable<WorkExperience | undefined> {
    return this._httpClientModule.put<WorkExperience>({
      controller: "WorkExperience",
      action: "update-work-experience"
    }, experience);
  }

  public deleteExperience(id: string): Observable<WorkExperience | undefined> {
    return this._httpClientModule.delete<WorkExperience>({
      controller: "WorkExperience"
    }, id);
  }

}
