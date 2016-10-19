import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  employee: Employee;

  constructor() { 
    this.employee = new Employee();
  }

  ngOnInit() {
    this.employees = [
      {
        id: 1,
        name: 'Yusuf'
      },
      {
        id: 2,
        name: 'Hasith'
      },
      {
        id: 3,
        name: 'Nuwan'
      },
      {
        id: 4,
        name: 'Yeshan'
      },
    ]
  }

  add() {
    this.employee.id = this.employees[this.employees.length -1].id + 1
    this.employees.push(this.employee);
    this.employee = new Employee();
  }

  delete(e: Employee) {
    var temp = this.employees.filter((employee) => {
      return employee.id != e.id;
    });
    
    this.employees = temp;
  }
}
