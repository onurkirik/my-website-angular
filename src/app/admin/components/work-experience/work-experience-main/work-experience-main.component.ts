import { Component } from '@angular/core';
import { WorkExperience } from 'src/app/models/WorkExperience.model';

@Component({
  selector: 'app-work-experience-main',
  templateUrl: './work-experience-main.component.html',
  styleUrls: ['./work-experience-main.component.scss']
})
export class WorkExperienceMainComponent {
  _selectedExperience: WorkExperience | undefined;

  public onSelectedExperience(element: WorkExperience) {
    this._selectedExperience = element;
  }
}
