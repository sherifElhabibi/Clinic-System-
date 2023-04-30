import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceListByDoctorComponent } from './invoice-list-by-doctor/invoice-list-by-doctor.component';
import { InvoiceListByPatientComponent } from './invoice-list-by-patient/invoice-list-by-patient.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceListByDoctorComponent,
    InvoiceListByPatientComponent,
    PaymentComponent,
    InvoiceDetailsComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InvoiceModule { }
