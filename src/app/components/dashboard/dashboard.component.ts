import { Component } from '@angular/core';
import { JsonWebTokenService } from 'src/app/services/json-web-token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userName: any;
  constructor(private jwtService: JsonWebTokenService) {}

  ngOnInit(){
    let token = localStorage.getItem('token');
    let decodejwt = this.jwtService.DecodeToken(token);
    this.userName = this.jwtService.GetUser();

    console.log(decodejwt, this.userName);
  }
}
