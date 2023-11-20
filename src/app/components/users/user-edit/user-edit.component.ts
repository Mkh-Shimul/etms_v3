import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private _router: ActivatedRoute, private _userService: UserService, private _route: Router) {}

  ngOnInit() {
    this.getUserRoles();
    this._router.params.subscribe(params => {
      this.id = params['id'];
      this._userService.GetUserById(this.id).subscribe({
        next: (response) => {
          this.userData = response
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
        console.log(response);
      }, error: (err) => {
        console.log(err)
      }, complete: () => {
        console.log("completed");
      }
    })
  }

  updateUser(){}
}
