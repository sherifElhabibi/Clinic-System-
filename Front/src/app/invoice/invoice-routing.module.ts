import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceListByDoctorComponent } from './invoice-list-by-doctor/invoice-list-by-doctor.component';
import { InvoiceListByPatientComponent } from './invoice-list-by-patient/invoice-list-by-patient.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';

const routes: Routes = [
  { path: '', component: InvoiceListComponent },
  { path: 'list', component: InvoiceListComponent },
  { path: 'details', component: InvoiceDetailsComponent},
  { path: 'listDoctor', component: InvoiceListByDoctorComponent },
  { path: 'listPatient', component: InvoiceListByPatientComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}
