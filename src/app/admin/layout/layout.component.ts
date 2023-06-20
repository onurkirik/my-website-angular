import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    public opened: boolean = true;

    constructor(private _userService: UserService) { }

    ngOnInit(): void { }

    public logout() {
        this._userService.signOut();
    }
}
