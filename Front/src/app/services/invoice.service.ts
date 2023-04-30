import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { invoiceData } from './../models/invoiceData';
import { Invoice } from './../models/invoice';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private httpOptions: any;

  constructor(public http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    };
  }

  base = environment.baseHttp + 'invoice';
  getAll() {
    return this.http.get<any[]>(this.base, this.httpOptions);
  }

  getAllInvoiceData() {
    return this.http.get<any[]>(
      environment.baseHttp + 'invoiceData',
      this.httpOptions
    );
  }
  addInvoice(INV: any) {
    return this.http.post<any>(this.base, INV, this.httpOptions);
  }
  addinvoiceData(invD: any) {
    return this.http.post<any>(
      environment.baseHttp + 'invoiceData',
      invD,
      this.httpOptions
    );
  }
  updateInvoice(INV: any) {
    return this.http.patch<any>(
      this.base + '/' + INV._id,
      INV,
      this.httpOptions
    );
  }
  updateInvoiceData(invD: any) {
    return this.http.patch<any>(
      this.base + '/' + invD._id,
      invD,
      this.httpOptions
    );
  }
  deleteInvoiceById(id: number) {
    return this.http.delete<any>(this.base + '/' + id, this.httpOptions);
  }
  deleteInvoiceDataByID(id: number) {
    return this.http.delete<any>(
      environment.baseHttp + 'invoiceData/' + id,
      this.httpOptions
    );
  }
  getInvoiceById(id: number) {
    return this.http.get<any>(this.base + '/' + id, this.httpOptions);
  }
  getInvoiceDataById(id: number) {
    return this.http.get<any>(
      environment.baseHttp + 'invoiceData/' + id,
      this.httpOptions
    );
  }
}