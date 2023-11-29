import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Bus } from 'src/app/models/bus.model';
import { BusService } from 'src/app/services/bus.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent {
  buslist: Bus[] = [];
  constructor(private _busService: BusService, private _spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.getAllBuses()
  }

  getAllBuses(){
    this._spinner.show();
    this._busService.GetAllBuses().subscribe({
      next: (response: Bus[]) => {
        this.buslist = response;
        this._spinner.hide();
        console.log(this.buslist)
      }, error: (err) => {
        console.log(err);
        this._spinner.hide();
      }
    })
  }

  deleteBus(id: number){
    const result = confirm("Are you sure?");
    if (result) {
      this._busService.DeleteBus(id).subscribe({
        next: (response) => {
          this.getAllBuses()
          console.log(response);
        }, 
        error: (err) => {
          console.log(err)
        }
      })
    } else {
      return;
    }
  }
}
