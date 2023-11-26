import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JsonWebTokenService {

  decodedToken!: { [key: string]: string };

  constructor() { }

  // SetToken(token: any) {
  //   if (token) {
  //     this.jwtToken = localStorage.setItem('token', token);
  //   }
  // }

  DecodeToken(token: any) {
    this.decodedToken = jwtDecode(token)
    return this.decodedToken
  }

  GetUser() {
    return this.decodedToken ? this.decodedToken["UserName"] : null;
  }

  GetUserRoleId() {
    return this.decodedToken ? this.decodedToken["UserRole"] : null;
  }
}
