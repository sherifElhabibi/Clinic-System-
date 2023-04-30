import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Clinic } from '../models/clinic';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  private httpOptions: any;
  constructor(public http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    };
  }

  base = environment.baseHttp + 'clinic';
  getAll() {
    return this.http.get<any[]>(this.base, this.httpOptions);
  }
  getById(id: number) {
    return this.http.get<Clinic>(this.base + '/' + id, this.httpOptions);
  }
  AddNewClinic(clinic: Clinic) {
    return this.http.post<Clinic>(this.base, clinic, this.httpOptions);
  }
  UpdateClinic(clinic: Clinic) {
    return this.http.put<Clinic>(
      this.base + '/' + clinic._id,
      clinic,
      this.httpOptions
    );
  }
}
