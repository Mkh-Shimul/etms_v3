import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { userDTO } from '../models/authentication/user-dto.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiUrl: string = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  public Register(userRqst: userDTO): Observable<any> {
    return this._http.post<any>(this.apiUrl + "Authentication/register", userRqst);
  }

  public Login(userRqst: userDTO): Observable<any> {
    return this._http.post<any>(this.apiUrl + "Authentication/login", userRqst);
  }

  public GetMenubyRoleId(userRoleId: number): Observable<any> {
    return this._http.get<any>(`${this.apiUrl}User/GetMenubyRoleId/${userRoleId}`);
  }
}
