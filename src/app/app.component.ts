import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'etms_ui';

  ngOnInit() {
    console.log(localStorage.getItem('token'));
    // this.logout();
  }
}



