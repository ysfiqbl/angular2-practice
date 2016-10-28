import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { Employee } from '../../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employee: Employee;

  constructor(
    private _es: EmployeeService,
    private router: Router
  ) { 
    this.employee = new Employee();
  }

  ngOnInit() {
  }

  /**
   * Use the create method of EmployeeService to create a new employee
   * and add the newly created employee to the employees array if the 
   * employee was successfully created. The array is being manipulated in 
   * order to prevent a needless HTTP request to fetch the list with the
   * newly created employee.
   */
  add() {
    var employee = JSON.parse(JSON.stringify(this.employee));
    this._es.create(employee).then((obj) => {
      if (obj.id > 0) {
        this.gotoDetail(obj.id);
      } else {
        console.log('Server error');
      }
    });
  }

  gotoDetail(id) {
    this.router.navigateByUrl(`/employees/${id}`);
  }

}
