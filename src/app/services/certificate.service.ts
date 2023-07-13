import { Injectable } from '@angular/core';
import { BaseService } from './common/base-service.service';
import { Certificate } from '../models/Certificate.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private _httpClientService: BaseService) { }
  
    public getAll(): Observable<Certificate[] | undefined> {
      return this._httpClientService.get<Certificate[]>({
        controller: "Certificates",
        action: "get-all"
      });
    }
  
    public getById(id: string): Observable<Certificate | undefined> {
      return this._httpClientService.get<Certificate>({
        controller: "Certificates",
        action: id
      });
    }
  
    public createCertificate(certificate: Certificate): Observable<Certificate | undefined> {
      return this._httpClientService.post<Certificate>({
        controller: "Certificates",
        action: "create-certificate"
      }, certificate);
    }
  
    public updateCertificate(certificate: Certificate): Observable<Certificate | undefined> {
  
      return this._httpClientService.put<Certificate>({
        controller: 'Certificates',
        action: 'update-certificate'
      }, certificate);
    }
  
    public deleteCertificate(id: string): Observable<Certificate> {
      return this._httpClientService.delete<Certificate>({
        controller: 'Certificates',
      }, id);
    }

}
