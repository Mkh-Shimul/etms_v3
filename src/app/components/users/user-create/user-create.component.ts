import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { userDTO } from 'src/app/models/authentication/user-dto.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  userRoles: any = 0;
  usrRqst: userDTO;

  constructor(private _userService: UserService, private _toast: NgToastService
    , private _route: Router, private _spinner: NgxSpinnerService){
    this.usrRqst = new userDTO();
  }

  ngOnInit() {
    this.getUserRoles();
  }

  getUserRoles() {
    this._userService.GetAllUserRoles().subscribe({
      next: (response) => {
        this.userRoles = response;
        console.log(response);
      }, error: (err) => {
        console.log(err)
      }, complete: () => {
        console.log("completed");
      }
    })
  }

  createUser() {
    this._spinner.show();
    this._userService.CreateUser(this.usrRqst).subscribe({
      next: () => {
        this._toast.success({ detail: "Success", summary: "User Created Successully"});
        this._route.navigate(['/users']);
        this._spinner.hide();
      }, error: () => {
        this._spinner.hide();
        this._toast.error({ detail: "Failed", summary: "User Creation Failed"});
      }
    })
  }
}
