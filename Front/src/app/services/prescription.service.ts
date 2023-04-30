import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prescription } from '../models/prescription';
import { environment } from '../../environment/environment';
import { PrescriptionPost } from '../models/prescription-post';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  private httpOptions: any;
  constructor(public http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    };
  }
  base = environment.baseHttp + 'prescription';
  getAll() {
    return this.http.get<Prescription[]>(this.base, this.httpOptions);
  }
  add(presc: any) {
    console.log(presc);
    return this.http.post<PrescriptionPost>(this.base, presc, this.httpOptions);
  }
  update(id: number, presc: Prescription) {
    return this.http.patch<Prescription>(
      this.base + '/' + id,
      presc,
      this.httpOptions
    );
  }
  deleteById(id: number) {
    return this.http.delete<Prescription>(
      this.base + '/' + id,
      this.httpOptions
    );
  }
  getById(id: number) {
    return this.http.get<Prescription>(this.base + '/' + id, this.httpOptions);
  }
}
