import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctor } from '../models/idoctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
private baseUrl = 'http://localhost:3000/doctors';
httpOptions:any;

  constructor(public http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    };

  }

  getAllDoctors() {
    return this.http.get<IDoctor[]>(this.baseUrl,this.httpOptions);
  }
  getDoctorById(id:number){
    return this.http.get<IDoctor>(`${this.baseUrl}/${id}`,this.httpOptions)
  }
  deleteDoctor(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`,this.httpOptions);
  }
  updateDoctor(udoctor:any){
    return this.http.patch(`${this.baseUrl}/${udoctor.Doc_id}`,udoctor,this.httpOptions)
  }
  addDoctor(doctor:FormData):Observable<any>{
    return this.http.post<any>(this.baseUrl,doctor,{
      headers: new HttpHeaders({
        authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    });
  }
}
