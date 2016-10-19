import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'vantage-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: Employee;

  constructor() { 
    this.employee = new Employee();
  }

  ngOnInit() {
  }

  add() {
    console.log("Logic to send object to server");
    console.log(this.employee);
  }

}
