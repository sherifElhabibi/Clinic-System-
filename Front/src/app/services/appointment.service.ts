import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = 'http://localhost:3000/appointment';
  constructor(public http: HttpClient) {

   }
   getAllAppoiments(){
    return this.http.get(this.baseUrl);
   }

   addApointment(appointment:Appointment){
    return this.http.post(this.baseUrl,appointment)
   }
}
