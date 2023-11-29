import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee/employee.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl: string = environment.apiUrl
  constructor(private _http: HttpClient) { }

  CreateEmployee(employeeRqst: Employee): Observable<Employee> {
    return this._http.post<Employee>(`${this.apiUrl}Employee`, employeeRqst);
  }

  GetAllEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(`${this.apiUrl}Employee`);
  }

  GetEmployeeById(id: number): Observable<Employee> {
    return this._http.get<Employee>(`${this.apiUrl}Employee/${id}`);
  }

  UpdateEmployeeById(id: number, employeeRqst: Employee): Observable<Employee> {
    return this._http.put<Employee>(`${this.apiUrl}Employee/${id}`, employeeRqst);
  }

  DeleteEmployee(id: number): Observable<Employee> {
    return this._http.delete<Employee>(`${this.apiUrl}Employee/${id}`);
  }

  CreateEmployeeFromExcel(formData: FormData): Observable<Employee> {
    return this._http.post<Employee>(`${this.apiUrl}Employee/CreateEmployeeFromExcel`, formData);
  }

}
