import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { HomeEmployeeComponent } from './componenets/home-employee/home-employee.component';
import { AddEmployeeComponent } from './componenets/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './componenets/update-employee/update-employee.component';
import { AboutComponent } from './componenets/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeEmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
