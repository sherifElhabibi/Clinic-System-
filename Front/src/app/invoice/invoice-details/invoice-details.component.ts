import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';
import { invoiceData } from '../../models/invoiceData';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css'],
})
export class InvoiceDetailsComponent implements OnInit {
  invoices: invoiceData[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private invoiceServices: InvoiceService
  ) {}
  id!: any;
  data!: invoiceData[];
  error: any;
  totalAmount = 0;

  ngOnInit(): void {
    this.invoiceServices.getAllInvoiceData().subscribe((a: any) => {
      this.invoices = a;
      // console.log(this.invoices);
      this.id = parseInt(sessionStorage.getItem('invoiceId')!);
      this.data = this.invoices.filter((inv) => inv.invoiceNumber === this.id);
      console.log(this.data);
      this.data[0].products.forEach((element) => {
        this.totalAmount += element.totalPrice;
      });
    });
  }


}