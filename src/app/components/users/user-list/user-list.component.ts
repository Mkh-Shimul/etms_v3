import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  userList: any[] = [];
  constructor(private _http: HttpClient){}

  ngOnInit() {
    this.getUserList()
  }

  getUserList() {
    this._http.get("https://localhost:44331/api/User").subscribe({
      next: (response) => {
        this.userList.push(response)
        console.log(response);
      }, error: (err) => {
        console.log(err);
      }
    })
  }
  deleteUser(id: number){}
}
