import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userDTO } from 'src/app/models/authentication/user-dto.model';
import { User } from 'src/app/models/user/user.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = environment.apiUrl;
  constructor(private _http: HttpClient) { }

  GetAllUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${this.apiUrl}User`);
  }

  CreateUser(usrRqst: any): Observable<userDTO> {
    return this._http.post<any>(`${this.apiUrl}User`, usrRqst);
  }

  GetUserById(id: number): Observable<User> {
    return this._http.get<User>(`${this.apiUrl}User/${id}`);
  }

  UpdateUserById(userdata: any, id: number): Observable<User> {
    return this._http.put<User>(`${this.apiUrl}User/${id}`, userdata)
  }

  DeleteUser(id: number): Observable<User> {
    return this._http.delete<User>(`${this.apiUrl}User/${id}`);
  }

  GetAllUserRoles(): Observable<any> {
    return this._http.get(`${this.apiUrl}User/GetAllUserRoles`);
  }
}
