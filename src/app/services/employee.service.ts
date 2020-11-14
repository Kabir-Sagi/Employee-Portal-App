import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IEmployee} from '../IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _httpClient:HttpClient) { }

  // GET all employees
  public getAllEmployees():Observable<IEmployee[]>{
    let dataURL = 'http://127.0.0.1:3000/api/employees';
    return this._httpClient.get<IEmployee[]>(dataURL).pipe(
      retry(1)
    );
  }

  // GET a single Employee
  public getEmployee(employeeId):Observable<IEmployee>{
    let dataURL = `http://127.0.0.1:3000/api/employees/${employeeId}`;
    return this._httpClient.get<IEmployee>(dataURL).pipe(
      retry(1)
    );
  }

  // Create (POST) a new Employee
  public addEmployee(employee:IEmployee){
    let newEmployee = {
      first_name : employee.first_name,
      last_name : employee.last_name,
      email : employee.email,
      gender : employee.gender,
      ip_address : employee.ip_address
    };
    let dataURL = 'http://127.0.0.1:3000/api/employees';
    return this._httpClient.post<any>(dataURL,newEmployee).pipe(
      retry(1)
    );
  }

  // update an employee
  public updateEmployee(employeeId,employee){
    let dataURL = `http://127.0.0.1:3000/api/employees/${employeeId}`;
    let updatedEmployee = {
      first_name : employee.first_name,
      last_name : employee.last_name,
      email : employee.email,
      gender : employee.gender,
      ip_address : employee.ip_address
    };
    return this._httpClient.put<any>(dataURL,updatedEmployee).pipe(
      retry(1)
    );
  }

  // delete an Employee
  public deleteEmployee(employeeId){
    let dataURL = `http://127.0.0.1:3000/api/employees/${employeeId}`;
    return this._httpClient.delete<any>(dataURL).pipe(
      retry(1)
    );
  }


}
