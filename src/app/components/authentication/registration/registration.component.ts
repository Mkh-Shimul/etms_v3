import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userDTO } from 'src/app/models/authentication/user-dto.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userRqst: userDTO;

  constructor(private _auth: AuthenticationService, private _route: Router) {
    this.userRqst = new userDTO();
  }
  register() {
    this._auth.Register(this.userRqst)
    .subscribe({
      next: (response) => {
        this._route.navigate(['authentication/login']);
      }, error: (err) => {
        console.log(err);
      }
    })
  }
  }
