import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DistributorComponent } from './distributor/distributor.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DistributorComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
