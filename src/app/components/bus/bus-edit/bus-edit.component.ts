
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from 'src/app/models/bus.model';
import { BusService } from 'src/app/services/bus.service';

@Component({
  selector: 'app-bus-edit',
  templateUrl: './bus-edit.component.html',
  styleUrls: ['./bus-edit.component.css']
})
export class BusEditComponent {
  id!: number;
  busdata!: Bus;
  startTimeValue!: string;
  endTimeValue!: string;
  constructor(private _router: ActivatedRoute, private _busService: BusService, private _route: Router) {}

  ngOnInit() {
    this._router.params.subscribe(params => {
      this.id = params['id'];
      this._busService.GetBusById(this.id).subscribe({
        next: (response) => {
          this.busdata = response;
          const startTimedateObject = new Date(response.startTime);
          const endTimedateObject = new Date(response.endTime);

          // Extract hours and minutes of start time
          const startHours = startTimedateObject.getHours();
          const startMinutes = startTimedateObject.getMinutes();
          // Extract hours and minutes of end time
          const endHours = endTimedateObject.getHours();
          const endMinutes = endTimedateObject.getMinutes();
          
          // Format as "HH:mm"
          this.startTimeValue = `${startHours.toString().padStart(2, '0')}:${startMinutes.toString().padStart(2, '0')}`;
          this.endTimeValue = `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
          // this.startTimeValue = new Date(response.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }, 
        error: (err) => {
          console.log(err);
        }
      }); 
    });
  }

  updateBus() {
    const [startTimeinputHours, startTimeinputMinutes] = this.startTimeValue.toString().split(':').map(Number);

    let startTime = new Date();
    startTime.setHours(startTimeinputHours);
    startTime.setMinutes(startTimeinputMinutes)


    const [endTimeinputHours, endTimeinputMinutes] = this.endTimeValue.toString().split(':').map(Number);
    let endtTime = new Date();
    endtTime.setHours(endTimeinputHours);
    endtTime.setMinutes(endTimeinputMinutes)
    
    this.busdata.startTime = startTime;
    this.busdata.endTime = endtTime;
    console.log("EDIT: ", this.busdata);
    // console.log(startTime, endtTime)
    this._busService.UpdateBusById(this.busdata, this.id).subscribe({
      next: (response) => {
        console.log(response)
        this._route.navigate(['/bus'])
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
