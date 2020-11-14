import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeEmployeeComponent} from './componenets/home-employee/home-employee.component';
import {AboutComponent} from './componenets/about/about.component';
import {AddEmployeeComponent} from './componenets/add-employee/add-employee.component';
import {UpdateEmployeeComponent} from './componenets/update-employee/update-employee.component';


const routes: Routes = [
  {path : '' , component : HomeEmployeeComponent },
  {path : 'about' , component : AboutComponent },
  {path : 'add-employee' , component : AddEmployeeComponent },
  {path : 'update-employee/:_id' , component : UpdateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
