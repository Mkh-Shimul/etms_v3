import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { userDTO } from 'src/app/models/authentication/user-dto.model';
import { User } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  userList: User[] = [];
  constructor(private _userService: UserService, private _spinner: NgxSpinnerService
    , private _toast: NgToastService){}

  ngOnInit() {
    this.getUserList()
  }

  getUserList() {
    this._spinner.show();
    this._userService.GetAllUsers().subscribe({
      next: (response: User[]) => {
        this.userList = response
        console.log(response);
      }, error: (err) => {
        console.log(err);
      },
      complete: () => {
        this._spinner.hide();
      }
    });
  }
  deleteUser(id: number){
    this._userService.DeleteUser(id).subscribe({
      next: (response) => {
        this._toast.success({ detail: "Success", summary: "User Successfully Deleted"});
        this.getUserList()
      }, 
      error: (err) => {
        this._toast.error({ detail: "Error", summary: "User Delete Failed"});
      }
    })
  }
}
