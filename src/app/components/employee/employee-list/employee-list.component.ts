import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee/employee.model';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employeeList: Employee[] = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployee()
  }
  getAllEmployee() {
    this._employeeService.GetAllEmployees().subscribe({
      next: (response) => {
        this.employeeList = response
      }, error: (err) => {
        console.log(err);
      }
    })
  }

  deleteEmployee(id: number) { 
    this._employeeService.DeleteEmployee(id).subscribe({
      next: () => {
        this.getAllEmployee();
      }, error: (err) => {
        console.log(err);
      }
    })
  }
}
