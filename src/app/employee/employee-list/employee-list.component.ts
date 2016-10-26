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
  showAdd: boolean;
  showEdit: boolean;
  showAddButton: boolean;

  constructor(
    private _es: EmployeeService
  ) { 
    this.employee = new Employee();
    this.showAdd = false;
    this.showEdit = false;
    this.showAddButton = true;
  }

  ngOnInit() {
    this.all();
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
        employee.id = obj.id;
        this.employees.push(employee);
      } else {
        console.log('Server error');
      }
    });
    this.showAdd = false;
  }

  /**
   * Use the update method of EmployeeService to update the selected employee.
   * The array is being manipulated in 
   * order to prevent a needless HTTP request to fetch the list with the
   * newly created employee.
   */
  update () {
    var employee = JSON.parse(JSON.stringify(this.employee));
    this._es.update(employee).then((status) => {
      if (status == 200) {
        this.employee[this.index(employee.id)] == employee;
        this.employee = new Employee();
      }
    });;
    this.showEdit = false;
    this.showAddButton = true;
  }

  

  /**
   * Use the delete method of EmployeeService to delete an employee and
   * remove the deleted employee from the employees array if the employee
   * was successfully removed. Log the response status otherwise.
   * 
   * @param e - employee that needs to be deleted
   */
  delete(e: Employee) {
    this._es.delete(e.id).then((status) => {
      if (status == 200) {
        var index = this.index(e.id)
	
        if (index != -1) {
          this.employees.splice(index,1);
        }
      } else {
        console.log(status);
      } 
    });
  }

  /**
   * Use the all method of EmployeeService to get the list of employees
   * and assign it the employees array once the result is received.
   */
  all() {
    this._es.all().then((employees) => {
      this.employees = employees;
    });
  }


  /**
   * Return the index of the employee with id
   * 
   * @param id - id of the employee
   */
  index(id) {
    return this.employees.findIndex((element) => {
      return element.id == id;
    });
  }

  /**
   * Load employee to edit
   */
  load(employee: Employee): void {
    this.employee = employee;
    this.showAddButton = false;
    this.showAdd = false;
    this.showEdit = true;
  }

  /**
   * Toggle 
   */
  toggleAdd() {
    this.showAdd = !this.showAdd;
  }
}
