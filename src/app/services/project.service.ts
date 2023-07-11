import { Injectable } from "@angular/core";
import { BaseService } from "./common/base-service.service";
import { Observable } from "rxjs";
import { Project } from "../models/Project.model";

@Injectable({
    providedIn: 'root'
  })
  export class ProjectService {
    constructor(private _httpClientService: BaseService) { }
  
    public getAll(): Observable<Project[] | undefined> {
      return this._httpClientService.get<Project[]>({
        controller: "Projects",
        action: "get-all"
      });
    }
  
    public getById(id: string): Observable<Project | undefined> {
      return this._httpClientService.get<Project>({
        controller: "Project",
        action: id
      });
    }
  
    public create(Project: Project): Observable<Project | undefined> {
      return this._httpClientService.post<Project>({
        controller: "Projects",
        action: "create-project"
      }, Project);
    }
  
    public updateProject(Project: Project): Observable<Project | undefined> {
  
      return this._httpClientService.put<Project>({
        controller: 'Projects',
        action: 'update-project'
      }, Project);
    }
  
    public deleteProject(id: string): Observable<Project> {
      return this._httpClientService.delete<Project>({
        controller: 'Projects',
      }, id);
    }
  
  }