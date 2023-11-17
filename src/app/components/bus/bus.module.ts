import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { BusListComponent } from './bus-list/bus-list.component';
import { BusCreateComponent } from './bus-create/bus-create.component';
import { FormsModule } from '@angular/forms';
import { BusEditComponent } from './bus-edit/bus-edit.component';


@NgModule({
  declarations: [
    BusListComponent,
    BusCreateComponent,
    BusEditComponent
  ],
  imports: [
    CommonModule,
    BusRoutingModule,
    FormsModule
  ]
})
export class BusModule { }
