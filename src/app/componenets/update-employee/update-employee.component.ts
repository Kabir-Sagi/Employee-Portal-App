import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../../IEmployee';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  public employee:IEmployee;
  public employeeId:string;

  constructor(private _activatedRoute:ActivatedRoute,
              private _employeeService:EmployeeService,
              private _router:Router) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap:ParamMap) => {
       this.employeeId = paramMap.get('_id');
    });

    this._employeeService.getEmployee(this.employeeId).subscribe((data) => {
      this.employee = data;
    });
  }

  // update Employee
  public updateEmployee(){
    this._employeeService.updateEmployee(this.employeeId,this.employee).subscribe((data) => {
       this._router.navigate(['/']);
    });
  }
}
