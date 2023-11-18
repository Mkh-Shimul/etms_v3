import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutComponent } from './master-layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BusListComponent } from '../bus/bus-list/bus-list.component';
import { BusCreateComponent } from '../bus/bus-create/bus-create.component';

const routes: Routes = [
  {
    path: '',
    component: MasterLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'bus',
        loadChildren: () => import('../bus/bus.module').then(b => b.BusModule),
      },
      {
        path: 'employee',
        loadChildren: () => import('../employee/employee.module').then(e => e.EmployeeModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then(u => u.UsersModule)
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterLayoutRoutingModule { }
