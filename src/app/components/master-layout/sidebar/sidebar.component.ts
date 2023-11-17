import { Component } from '@angular/core';
import { JsonWebTokenService } from 'src/app/services/json-web-token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  userName: any;
  constructor(private jwtService: JsonWebTokenService) {}
  ngOnInit() {
    let token = localStorage.getItem('token');
    let decodejwt = this.jwtService.DecodeToken(token);
    this.userName = this.jwtService.GetUser();
    console.log("HEADER: ", this.userName);
  }
}
