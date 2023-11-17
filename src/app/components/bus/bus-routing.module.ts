import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { BusCreateComponent } from './bus-create/bus-create.component';
import { BusEditComponent } from './bus-edit/bus-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BusListComponent
  },
  {
    path: 'create',
    component: BusCreateComponent
  },
  {
    path: 'edit/:id',
    component: BusEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusRoutingModule { }
