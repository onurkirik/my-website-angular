import { Component } from '@angular/core';
import { Project } from 'src/app/models/Project.model';

@Component({
  selector: 'app-projects-main',
  templateUrl: './projects-main.component.html',
  styleUrls: ['./projects-main.component.scss']
})
export class ProjectsMainComponent {
  selectedProject!: Project;

  onSelectedProject(project: Project) {
    this.selectedProject = project;
  }

  constructor() { }
  ngOnInit(): void { }


}
