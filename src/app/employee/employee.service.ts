import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Employee } from '../employee';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {

  url: string;

  constructor(private http: Http) { 
    this.url = 'http://localhost:7150/employees/'
  }

  getEmployees(): Promise<any[]> {
    return this.http.get(this.url).toPromise().then((response) => {
      console.log(response);
      return response.json();
    });
  }

  delete(id: number) {
    return this.http.delete(`${this.url}${id}`).toPromise().then((response) => {
      return response.status;
    });
  }

}
