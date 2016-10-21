import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  employee: Employee;

  constructor(
    private _es: EmployeeService
  ) { 
    this.employee = new Employee();
  }

  ngOnInit() {
    this.getEmployees();
  }

  add() {
    this.employee.id = this.employees[this.employees.length -1].id + 1
    this.employees.push(this.employee);
    this.employee = new Employee();
  }

  delete(e: Employee) {
    this._es.delete(e.id).then((status) => {
      if (status == 200) {
        var index = this.getEmployeeIndex(e.id)
	
        if (index != -1) {
          this.employees.splice(index,1);
        }
      } else {
        console.log(status);
      } 
    });
  }

  getEmployees() {
    this._es.getEmployees().then((employees) => {
      console.log(employees)
      this.employees = employees;
    });
  }

  getEmployeeIndex(id) {
    return this.employees.findIndex((element) => {
      return element.id == id;
    });
  }
}
