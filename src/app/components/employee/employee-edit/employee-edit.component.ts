import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee/employee.model';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  employeeData!: Employee;
  id!: number;

  constructor(private _employeeService: EmployeeService, private _router: ActivatedRoute,private _route: Router) {}
  ngOnInit() {
    this._router.params.subscribe(params => {
      this.id = params['id'];
      this._employeeService.GetEmployeeById(this.id).subscribe({
        next: (response) => {
          this.employeeData = response
        }, error: (err) => {
          console.log(err);
        }
      })
    });
  }
  updateEmployee() {
    this._employeeService.UpdateEmployeeById(this.id, this.employeeData).subscribe({
      next: (response) => {
        this._route.navigate(['/employee']);
      }, error: (err) => {
        console.log(err);
      }
    })
  }
}
