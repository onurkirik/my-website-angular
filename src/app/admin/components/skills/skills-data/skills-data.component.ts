import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { firstValueFrom } from 'rxjs';
import { Skills } from 'src/app/models/Skills.model';
import { SkillsService } from 'src/app/services/skills.service';
import { SkillsFormComponent } from '../skills-form/skills-form.component';

@Component({
  selector: 'app-skills-data',
  templateUrl: './skills-data.component.html',
  styleUrls: ['./skills-data.component.scss']
})
export class SkillsDataComponent {

  _dataSource: MatTableDataSource<Skills> = new MatTableDataSource<Skills>();
  @ViewChild(MatPaginator) _paginator!: MatPaginator;

  _skills: Skills[] | undefined;
  @Output() _selectedSkill: EventEmitter<Skills> = new EventEmitter<Skills>();

  _displayedColumns = [
    'name',
    'rate',
    'update',
    'delete'
  ];

  constructor(
    private _skillsService: SkillsService,
    private _dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    this.getSkills();
  }

  public async getSkills() {
    try {
      const data = await firstValueFrom(this._skillsService.getAll());
      this._skills = data;
      this._dataSource = new MatTableDataSource<Skills>(this._skills);
      this._dataSource.paginator = this._paginator;
    } catch (error) {
      console.log(error);
    }
  }

  public createSkill() {
    const dialogRef = this._dialogRef.open(SkillsFormComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.afterModalClosed();
    });
  }

  public selectSkill(element: Skills) {
    this._selectedSkill.emit(element);
  }

  public updateSkill(element: Skills) {
    const dialogRef = this._dialogRef.open(SkillsFormComponent, {
      data: element
    });

    dialogRef.afterClosed().subscribe(() => {
      this.afterModalClosed();
    })
  }

  public deleteSkill(element: Skills) {
    try {
      this._skillsService.deleteSkill(element.id!).subscribe(
        (success) => {
          this.getSkills();
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  public afterModalClosed() {
    this.getSkills();
  }

}
