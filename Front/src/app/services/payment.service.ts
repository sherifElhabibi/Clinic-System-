import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment'; 
import { Payment } from '../models/payment'; 

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private httpOptions: any;


  constructor(public http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': 'Bearer '+ sessionStorage.getItem("token")
      })
    }
  }
  base = environment.baseHttp + 'payment/';

  addPayment(payment: any, id:number) {
    console.log("from service",payment);
    return this.http.post<any>(this.base +id, payment ,  this.httpOptions);
  }


}
