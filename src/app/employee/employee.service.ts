import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Employee } from '../employee';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {

  url: string;

  constructor(private http: Http) { 
    this.url = 'http://localhost:7150/api/employees/'
  }

  /**
   * Make HTTP GET request to get a list of all employees. 
   */
  all(): Promise<Employee[]> {
    return this.http.get(this.url).toPromise().then((response) => {
      return response.json() as Employee;
    });
  }

  /**
   * Make HTTP GET request to get a an employee with id @id. 
   */
  get(id: number): Promise<Employee> {
    return this.http.get(`${this.url}${id}`).toPromise().then((response) => {
      return response.json() as Employee;
    });
  }

  /**
   * Make HTTP POST request to create a new employee. The response contains
   * the id of the newly created employee.
   * 
   * @param employee - employee object that needs to be created
   */
  create(employee: Employee): Promise<any> {
    return this.http.post(this.url, employee).toPromise().then((response) => {
      return response.json();
    })
  }

  /**
   * Make HTTP PUR request to update the employee. Returns 200 OK if successful.
   * 
   * @param employee - employee object that needs to be created
   */
  update(employee: Employee): Promise<number> {
    return this.http.put(`${this.url}${employee.id}`, employee).toPromise().then((response) => {
      return response.status;
    })
  }

  /**
   * Make HTTP DELETE request to delete the an employee with id
   * 
   * @param id - the id of the employee to be deleted
   */
  delete(id: number): Promise<number> {
    return this.http.delete(`${this.url}${id}`).toPromise().then((response) => {
      return response.status;
    });
  }

}
