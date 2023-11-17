import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { userDTO } from 'src/app/models/authentication/user-dto.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userRqst: userDTO;

  constructor(private _auth: AuthenticationService, private _route: Router
    , private _spinner: NgxSpinnerService, private _toast: NgToastService) {
    this.userRqst = new userDTO();
  }

  login(){
    this._spinner.show();
    this._auth.Login(this.userRqst)
    .subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        // localStorage.setItem('userInfo', response.userinfo);
        this._route.navigate(['dashboard']);
        this._spinner.hide();
        this._toast.success({ detail: "Success", summary: "Welcome to the dashboard"})
      }, error: (err) => {
        alert(err.message);
        this._route.navigate(['authentication/login']);
        this._spinner.hide();
      }
    })
  }
}
