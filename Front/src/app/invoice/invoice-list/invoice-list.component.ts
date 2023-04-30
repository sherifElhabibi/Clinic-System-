import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from '../../models/invoice';
import { invoiceData } from '../../models/invoiceData';
import { InvoiceService } from '../../services/invoice.service';
@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css'],
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[] = [];
  invoiceDatas: invoiceData[] = [];
  filteredInvoice: invoiceData[] = [];

  constructor(
    private routes: Router,
    private invoiceServices: InvoiceService
  ) {}
  // console.log(this.invoiceDatas);
  // console.log(this.invoiceDatas[0]);
  delete(id: number) {
    if (confirm('Are you sure, you want to delete it?')) {
      this.invoiceServices.deleteInvoiceById(id).subscribe((a) => {
        this.invoices = this.invoices.filter((inv) => inv._id != id);
      });
    }
    this.filteredInvoice = this.invoiceDatas.filter(
      (inv) => inv.invoiceNumber == id
    );
    this.invoiceServices
      .deleteInvoiceDataByID(this.filteredInvoice[0]._id)
      .subscribe(
        (a) => console.log(a),
        (error) => console.log(error)
      );
  }

  ShowDetails(id: number) {
    sessionStorage.setItem('invoiceId', JSON.stringify(id));
    this.routes.navigateByUrl('/invoice/details');
  }
  ngOnInit(): void {
    sessionStorage.setItem('invoiceId', '');
    this.invoiceServices.getAll().subscribe((a: any) => {
      this.invoices = a;
    });
    this.invoiceServices.getAllInvoiceData().subscribe((a: any) => {
      this.invoiceDatas = a;
      console.log(a);
    });
  }
}