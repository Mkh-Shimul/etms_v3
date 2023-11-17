import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})

export class AuthenticationGuard {
  constructor(private _route: Router) {}

  canActivate(): boolean {
    const hasToken = !!localStorage.getItem('token');
    if(hasToken) {
      return true;
    } else {
      this._route.navigate(['authentication/login']);
      return false;
    }
  }
};
