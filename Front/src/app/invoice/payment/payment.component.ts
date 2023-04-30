import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Invoice } from 'src/app/models/invoice'; 
import { InvoiceService } from 'src/app/services/invoice.service';
import { AuthService } from 'src/app/services/authService'; 
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  payment: FormGroup;
  token: any;
  decodedData: any;
  invoice!: Invoice;
  id!: number;
  error = '';
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private paymentService: PaymentService,
    private invoiceService: InvoiceService
  ) {
    this.payment = this.formBuilder.group({
      amount: [{ disabled: true }],
      card_number: ['', Validators.required],
      exp_month: ['', Validators.required],
      exp_year: ['', Validators.required],
      cvc: ['', Validators.required],
    });
  }
  onSubmit() {
    this.paymentService.addPayment(this.payment.value, this.id).subscribe(
      (pay) => console.log(pay),
      (error) => console.log(error)
    );
  }
  getAmount() {
    return this.payment.get('amount');
  }
  ngOnInit(): void {
    this.id = parseInt(sessionStorage.getItem('invoiceId')!);
    this.invoiceService.getInvoiceById(this.id).subscribe((a: any) => {
      this.invoice = a;
      console.log(this.invoice);
      this.getAmount()?.patchValue(this.invoice.totalDue);
    });
  }
}