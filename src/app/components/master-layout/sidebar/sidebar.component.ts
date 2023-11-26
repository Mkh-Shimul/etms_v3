import { NotExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JsonWebTokenService } from 'src/app/services/json-web-token.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  userName: any;
  menuList: any = [];
  currentRoleId: any;
  
  constructor(private _jwtService: JsonWebTokenService, private _authService: AuthenticationService) { }
  
  ngOnInit() {
    let token = localStorage.getItem('token');
    let decodejwt = this._jwtService.DecodeToken(token);
    this.userName = this._jwtService.GetUser();
    console.log("HEADER: ", this.userName);
    this.getMenubyRoleId();
    console.log("ROLE: ", parseInt(this.currentRoleId))
  }
  
  getMenubyRoleId() {
    this.currentRoleId = this._jwtService.GetUserRoleId();
    this._authService.GetMenubyRoleId(parseInt(this.currentRoleId)).subscribe({
      next: (response) => {
        this.menuList= response;
        console.log(response)
      }, error: (err) => {
        console.log(err);
      }
    })
  }
}
