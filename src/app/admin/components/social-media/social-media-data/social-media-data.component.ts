import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { firstValueFrom } from 'rxjs';
import { SocialMedia } from 'src/app/models/SocialMedia.model';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { SocialMediaFormComponent } from '../social-media-form/social-media-form.component';

@Component({
  selector: 'app-social-media-data',
  templateUrl: './social-media-data.component.html',
  styleUrls: ['./social-media-data.component.scss']
})
export class SocialMediaDataComponent {

  _dataSource: MatTableDataSource<SocialMedia> = new MatTableDataSource<SocialMedia>();
  @ViewChild(MatPaginator) _paginator!: MatPaginator;

  _socialMedias: SocialMedia[] | undefined;
  @Output() _selectedSocialMedia: EventEmitter<SocialMedia> = new EventEmitter<SocialMedia>();

  _displayedColumns = [
    'name',
    'link',
    'update',
    'delete'
  ]

  constructor(
    private _socialMediaService: SocialMediaService,
    private _dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    this.getSocialMedias();
  }

  public async getSocialMedias() {
    try {
      const data = await firstValueFrom(this._socialMediaService.getAll());
      this._socialMedias = data;
      this._dataSource = new MatTableDataSource<SocialMedia>(this._socialMedias);
      this._dataSource.paginator = this._paginator;
    } catch (error) {
      console.log(error);
    }
  }

  public async selectSocialMedia(element: SocialMedia) {
    this._selectedSocialMedia.emit(element);
  }

  public createSocialMedia() {
    const dialogRef = this._dialogRef.open(SocialMediaFormComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.afterModalClosed();
    });
  }

  public updateSocialMedia(element: SocialMedia) {
    const dialogRef = this._dialogRef.open(SocialMediaFormComponent, {
      data: element
    });

    dialogRef.afterClosed().subscribe(() => {
      this.afterModalClosed();
    })
  }

  public deleteSocialMedia(element: SocialMedia) {
    try {
      this._socialMediaService.deleteSocialMedia(element.id!).subscribe(
        (success) => {
          this.getSocialMedias();
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  public afterModalClosed() {
    this.getSocialMedias();
  }

}
