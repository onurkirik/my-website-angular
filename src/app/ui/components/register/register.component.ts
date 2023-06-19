import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    email: string | null = null;
    password: string | null = null;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void { }

    public login() {
        // Burada Web API'ye istek göndererek kullanıcıyı kontrol edebilirsiniz.
        // Örnek olarak sadece "admin" kullanıcı adı ve "password" şifresini kabul edelim.
        if (this.email === 'admin' && this.password === 'password') {
            // Giriş başarılı olduğunda yönlendirme yapabilirsiniz.
            this.router.navigate(['/admin']);
        } else {
            // Giriş başarısız olduğunda kullanıcıya bir hata mesajı gösterebilirsiniz.
            console.log('Giriş başarısız!');
        }
    }
}
