import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DistributorComponent } from './distributor/distributor.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeService } from './employee/employee.service';

import { appRouting } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DistributorComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
