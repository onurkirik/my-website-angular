import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { firstValueFrom } from 'rxjs';
import { Education } from 'src/app/models/Education.model';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-data',
  templateUrl: './education-data.component.html',
  styleUrls: ['./education-data.component.scss']
})
export class EducationDataComponent {
  @Output() _selectedEducation: EventEmitter<Education> = new EventEmitter<Education>();
  _dataSource: MatTableDataSource<Education> = new MatTableDataSource<Education>();
  _educations: Education[] | undefined;
  @ViewChild(MatPaginator) _paginator!: MatPaginator;

  _displayedColumns = [
    'title',
    'startDate',
    'endDate',
    'delete'
  ]

  constructor(
    private _educationService: EducationService
  ) { }
  ngOnInit(): void {
    this.getEducations();
  }

  public selectEducation(education: Education) {
    this._selectedEducation.emit(education);
  }

  public deleteEducation(education: Education) {

    try {
      this._educationService.deleteEducation(education.id!).subscribe(
        (success) => {
          this.getEducations();
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async getEducations() {
    try {
      const data = await firstValueFrom(this._educationService.getAll());

      this._educations = data;
      this._dataSource = new MatTableDataSource<Education>(this._educations);
      this._dataSource.paginator = this._paginator;
    } catch (error) {
      console.log("Something get wrong");
    }
  }

}
