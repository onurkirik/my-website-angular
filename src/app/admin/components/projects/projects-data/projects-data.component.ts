import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Project } from 'src/app/models/Project.model';
import { ProjectService } from 'src/app/services/project.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-projects-data',
  templateUrl: './projects-data.component.html',
  styleUrls: ['./projects-data.component.scss']
})
export class ProjectsDataComponent {

  _projects: Project[] | undefined;
  @Output() _selectedProject: EventEmitter<Project> = new EventEmitter<Project>();
  _dataSource: MatTableDataSource<Project> = new MatTableDataSource<Project>();

  @ViewChild(MatPaginator) _paginator!: MatPaginator;

  _displayedColumns: string[] = [
    'title',
    'content',
    'startDate',
    'endDate',
    'delete'
  ]

  constructor(
    private _projectService: ProjectService
  ) { }
  ngOnInit(): void {
    this.getProjects();
  }

  public selectProject(project: Project) {
    this._selectedProject.emit(project);
  }

  public updateProject(project: Project) {

  }

  public deleteProject(project: Project) {
    this._projectService.deleteProject(project.id!).subscribe(
      (success) => {
        console.log("Success");
        this.getProjects();
      }
    );
  }

  public async getProjects() {
    try {
      const data = await firstValueFrom(this._projectService.getAll());

      this._projects = data;
      this._dataSource = new MatTableDataSource<Project>(this._projects);
      this._dataSource.paginator = this._paginator;
    } catch (error) {
      console.log("Something get wrong");
    }
  }

}

