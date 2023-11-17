import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee/employee.model';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  employeeRqst: Employee;

  constructor(private _employeeService: EmployeeService, private _route: Router){ this.employeeRqst = new Employee() }
  
  createEmployee(){
    this._employeeService.CreateEmployee(this.employeeRqst).subscribe({
      next: (response) => {
        alert("Data Saved Successfully");
        // alert(response);
        this._route.navigate(['/employee'])
      }, error: (err) => {
        console.log(err);
      }
    })
  }
}
