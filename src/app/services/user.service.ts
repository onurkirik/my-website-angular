
import { Injectable } from '@angular/core';
import { BaseService } from './common/base-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private _httpClientService: BaseService,
        private _router: Router
        ) { }

    public signIn(credentials: { email: string, password: string, rememberMe: boolean }): Observable<any> {
        return this._httpClientService.post<any>({
            controller: "Member",
            action: "login"
        }, credentials);
    }

    public signOut() {
        this._router.navigate(['']);
    }
}