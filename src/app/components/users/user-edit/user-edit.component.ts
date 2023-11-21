import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  id!: number;
  userData!: User;
  userRoles: any = 0;
  constructor(private _router: ActivatedRoute, private _userService: UserService, private _route: Router
    , private _spinner: NgxSpinnerService, private _toast: NgToastService) {
      this.userData = new User();
    }

  ngOnInit() {
    this.getUserRoles();
    this._router.params.subscribe(params => {
      this.id = params['id'];
      this._userService.GetUserById(this.id).subscribe({
        next: (response) => {
          this.userData = response;
          console.log(this.userData);
        }, error: (err) => {
          console.log(err);
        }
      })
    })
  }

  
  getUserRoles() {
    this._userService.GetAllUserRoles().subscribe({
      next: (response) => {
        this.userRoles = response;
        //console.log(response);
      }, error: (err) => {
        console.log(err)
      }, complete: () => {
        console.log("completed");
      }
    })
  }
  

  updateUser(){
    this._spinner.show();
    this._userService.UpdateUserById(this.userData, this.id).subscribe({
      next: (response) => {
        this._route.navigate(['/users']);
        this._toast.success({detail: "Success", summary: "User Updated Successfully"});
      },
      error: (err) => {
        this._toast.error({detail: "Error", summary: "User Update Failed"});
      },
      complete: () => {
        this._spinner.hide();
      }
    })
    
  }
}
