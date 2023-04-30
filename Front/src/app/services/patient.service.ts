import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';
import { environment } from 'src/environment/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private httpOptions: any;
  constructor(public http: HttpClient,private route:ActivatedRoute) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    };
  }
  base = environment.baseHttp;
  getPatient(id: Number) {
    return this.http.get<Patient>(
      this.base + 'patient' + '/' + id,
      this.httpOptions
    );
  }
  getAllPatients() {
    return this.http.get<Patient[]>(this.base+'patient', this.httpOptions);
  }
  addPatient(patient: Patient) {
    console.log("from service",patient);
    return this.http.post<Patient>(this.base+'patient', patient,  this.httpOptions);
  }

  updatePatient(patient:Patient,id:number)
  {
    // const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    return this.http.patch<Patient>(this.base+'patient/'+ id,patient,this.httpOptions);
  }

  deleteById(id: number) {
    return this.http.delete<Patient>(this.base+'patient'+"/"+ id, this.httpOptions);
  }
}
