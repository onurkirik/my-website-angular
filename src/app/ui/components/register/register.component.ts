import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    _loginForm = new FormGroup({
        email: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required]),
        rememberMe: new FormControl(false)
    });



    constructor(
        private _router: Router,
        private _userService: UserService
    ) { }

    ngOnInit(): void { }

    public onSubmit() {
        if (this._loginForm.valid) {
            const credentials: LoginForm = {
                email: this._loginForm.get('email')?.value,
                password: this._loginForm.get('password')?.value,
                rememberMe: this._loginForm.get('rememberMe')?.value
            };
            this._userService.login(credentials).subscribe((res) => {
                this._router.navigate(['/admin']);
            });
        }
    }

}

export interface LoginForm {
    email: any;
    password: any;
    rememberMe: any;
}
