import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Employee } from 'src/app/models/employee/employee.model';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  employeeRqst: Employee;
  isFileUploadEnable: boolean = false;
  excelData: File | undefined;

  constructor(private _employeeService: EmployeeService, private _route: Router,
    private _toast: NgToastService) { this.employeeRqst = new Employee() }

  createEmployee() {
    if (this.isFileUploadEnable === true) {
      if (this.excelData === undefined) {
        this._toast.error({ detail: "Error", summary: "No File has been selected" })
      } else {
        // file upload functionalities
        console.log(this.excelData);
      }
    } else {
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

  excelFileUploadEnable(event: any) {
    event.target.checked ? this.isFileUploadEnable = true : this.isFileUploadEnable = false;
  }

  //#region Helper Function
  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.excelData = fileList[0];
    } else {
      // No file selected, reset the variable
      this.excelData = undefined;
    }
  }
  //#endregion
}
