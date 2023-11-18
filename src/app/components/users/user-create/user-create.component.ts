import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  userRoles: any = []

  constructor(private _http: HttpClient){}

  ngOnInit() {
    this.getUserRoles();
  }

  getUserRoles() {
    alert("Get user Roles from api")
  }
}
