import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../../IEmployee';
import {EmployeeService} from '../../services/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.css']
})
export class HomeEmployeeComponent implements OnInit {

  public employees:IEmployee[];

  constructor(private _employeeService:EmployeeService,
              private _router:Router) { }

  ngOnInit(): void {
    this._employeeService.getAllEmployees().subscribe((data) => {
       this.employees = data;
    });
  }

  // Delete Employee
  public deleteEmployee(employeeId){
    this._employeeService.deleteEmployee(employeeId).subscribe((data) => {
      // to reload the same page / component
      this._router.navigateByUrl('/about', { skipLocationChange: true }).then(() => {
        this._router.navigate(['/']);
      });
    });
  }

}
