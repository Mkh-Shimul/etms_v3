import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from 'src/app/models/bus.model';
import { BusService } from 'src/app/services/bus.service';

@Component({
  selector: 'app-bus-create',
  templateUrl: './bus-create.component.html',
  styleUrls: ['./bus-create.component.css']
})
export class BusCreateComponent {

  busRqst: Bus;

  constructor(private _bus: BusService, private _route: Router) {
    this.busRqst = new Bus();
  }
  createBus() {
    // console.log(this.busRqst);
    
    const [startTimeinputHours, startTimeinputMinutes] = this.busRqst.startTime.toString().split(':').map(Number);

    let startTime = new Date();
    startTime.setHours(startTimeinputHours);
    startTime.setMinutes(startTimeinputMinutes)


    const [endTimeinputHours, endTimeinputMinutes] = this.busRqst.endTime.toString().split(':').map(Number);
    let endtTime = new Date();
    endtTime.setHours(endTimeinputHours);
    endtTime.setMinutes(endTimeinputMinutes)
    
    this.busRqst.startTime = startTime;
    this.busRqst.endTime = endtTime;
    // console.log(this.busRqst);
    this._bus.CreateBus(this.busRqst).subscribe({
      next: (response) => {
        alert("Data Saved Successfully");
        // alert(response);
        this._route.navigate(['/bus'])
      }, error: (err) => {
        console.log(err);
      }
    })
  }
}
