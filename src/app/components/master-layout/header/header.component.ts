import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JsonWebTokenService } from 'src/app/services/json-web-token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName: any;
  constructor(private _route: Router, private jwtService: JsonWebTokenService) { }

  ngOnInit() {
    let token = localStorage.getItem('token');
    let decodejwt = this.jwtService.DecodeToken(token);
    this.userName = this.jwtService.GetUser();
    console.log("HEADER: ", this.userName);
  }
  logout() {
    localStorage.removeItem('token');
    this._route.navigate(['authentication/login']);
  }
}
