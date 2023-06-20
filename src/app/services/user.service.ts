
import { Injectable } from '@angular/core';
import { BaseService } from './common/base-service.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private _httpClientService: BaseService) { }

    public login(credentials: { email: string, password: string, rememberMe: boolean }): Observable<any> {
        return this._httpClientService.post<any>({
            controller: "Member",
            action: "login"
        }, credentials);
    }
}