import { Component, Input } from '@angular/core';
import { Education } from 'src/app/models/Education.model';

@Component({
  selector: 'app-education-main',
  templateUrl: './education-main.component.html',
  styleUrls: ['./education-main.component.scss']
})
export class EducationMainComponent {

  @Input() selectedEducation: Education | undefined;
  public onSelectedEducation(education: Education) {
    this.selectedEducation = education;
  }

  constructor() { }
  ngOnInit(): void { }
}
