import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee';
import { environment } from '../../environment/environment';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private httpOptions: any;

  constructor(public http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    };
  }
  base = environment.baseHttp + 'employee';
  getAll() {
    return this.http.get<any[]>(this.base, this.httpOptions);
  }

  add(emp: any) {
    console.log('from service', emp);
    return this.http.post<any>(this.base, emp, this.httpOptions);
  }

  update(id: number, emp: Employee) {
    console.log('from service', emp);
    return this.http.patch<any>(this.base + '/' + id, emp, this.httpOptions);
  }

  deleteById(id: number) {
    return this.http.delete<any>(this.base + '/' + id, this.httpOptions);
  }

  getById(id: number) {
    return this.http.get<any>(this.base + '/' + id, this.httpOptions);
  }
}
