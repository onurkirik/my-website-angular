import { Injectable } from '@angular/core';
import { BaseService } from './common/base-service.service';
import { SocialMedia } from '../models/SocialMedia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  constructor(private _httpClientService: BaseService) { }

  public getAll(): Observable<SocialMedia[] | undefined> {
    return this._httpClientService.get<SocialMedia[]>({
      controller: "SocialMedia",
      action: "get-all"
    });
  }

  public createSocialMedia(socialMedia: SocialMedia): Observable<SocialMedia | undefined> {
    return this._httpClientService.post<SocialMedia>({
      controller: "SocialMedia",
      action: "create-social-media"
    }, socialMedia);
  }

  public updateSocialMedia(socialMedia: SocialMedia): Observable<SocialMedia | undefined> {
    return this._httpClientService.put<SocialMedia>({
      controller: "SocialMedia",
      action: "update-social-media"
    }, socialMedia);
  }

  public deleteSocialMedia(id: string): Observable<SocialMedia | undefined> {
    return this._httpClientService.delete<SocialMedia>({
      controller: "SocialMedia"
    }, id);
  }

}
