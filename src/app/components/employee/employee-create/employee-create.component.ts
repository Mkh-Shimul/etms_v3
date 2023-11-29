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
        const formData = new FormData();
        formData.append('file', this.excelData);
        this._employeeService.CreateEmployeeFromExcel(formData).subscribe({
          next: (response) => {
            alert("File Upload Successfully");
            // alert(response);
            this._route.navigate(['/employee'])
          }, error: (err) => {
            console.log(err);
          }
        })
      }
    } else {
      this._employeeService.CreateEmployee(this.employeeRqst).subscribe({
        next: (response) => {
          alert("Data Saved Successfully");
          // alert(response);
          this._route.navigate(['/employee'])
        }, error: (err) => {
          console.log(err.error);
          this._toast.error({ detail: "Error", summary: err.error.title })
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
      // Check if the file type is allowed (xlsx, xls, or csv)
      const allowedFileExtensions = ['.xlsx', '.xls', '.csv'];
      const fileName: string = fileList[0].name;
      const fileExtension: string = fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);

      if (!allowedFileExtensions.includes('.' + fileExtension.toLowerCase())) {
        this._toast.warning({ detail: "Attention", summary: "Please select a valid Excel file (.xlsx, .xls, .csv)" });
        setTimeout(() => {
          event.target.value = null;
        }, 4000);
      } else {
        this.excelData = fileList[0];
      }
    } else {
      // No file selected, reset the variable
      this.excelData = undefined;
    }
  }
  //#endregion
}
