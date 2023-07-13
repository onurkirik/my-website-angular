import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { firstValueFrom } from 'rxjs';
import { WorkExperience } from 'src/app/models/WorkExperience.model';
import { WorkExperienceService } from 'src/app/services/work-experience.service';

@Component({
  selector: 'app-work-experience-data',
  templateUrl: './work-experience-data.component.html',
  styleUrls: ['./work-experience-data.component.scss']
})
export class WorkExperienceDataComponent {
  @Output() _selectedExperience: EventEmitter<WorkExperience> = new EventEmitter<WorkExperience>();
  @ViewChild(MatPaginator) _paginator!: MatPaginator;
  _dataSource: MatTableDataSource<WorkExperience> = new MatTableDataSource<WorkExperience>();
  _experiences: WorkExperience[] | undefined;
  _displayedColumns = [
    'title',
    'content',
    'startDate',
    'endDate',
    'delete'
  ];

  constructor(private _workExperienceService: WorkExperienceService) { }
  ngOnInit(): void {
    this.getExperiences();
  }

  public async getExperiences() {
    try {
      const data = await firstValueFrom(this._workExperienceService.getExperiences());

      this._experiences = data;
      this._dataSource = new MatTableDataSource<WorkExperience>(this._experiences);
      this._dataSource.paginator = this._paginator;
    } catch (error) {
      console.log(error);
    }
  }

  public selectEducation(element: WorkExperience) {
    this._selectedExperience.emit(element);
  }

  public deleteEducation(element: WorkExperience) {
    try {
      this._workExperienceService.deleteExperience(element.id!).subscribe(
        (success) => {
          this.getExperiences();
        }
      )
    } catch (error) {
      console.log(error);
    }
  }


}
