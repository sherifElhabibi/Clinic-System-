import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorListComponent } from '../doctor/doctor-list/doctor-list.component';
import { DoctorAddComponent } from '../doctor/doctor-add/doctor-add.component';
import { EmployeeListComponent } from '../employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from '../employee/employee-add/employee-add.component';
import { PatientListComponent } from '../patient/patient-list/patient-list.component';
import { PatientAddComponent } from '../patient/patient-add/patient-add.component';
import { AppointmentListComponent } from '../appointment/appointment-list/appointment-list.component';
import { InvoiceListComponent } from '../invoice/invoice-list/invoice-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'Doctors', component: DoctorListComponent },
      { path: 'DoctorAdd', component: DoctorAddComponent },
      { path: 'Employees', component: EmployeeListComponent },
      { path: 'EmployeeAdd', component: EmployeeAddComponent },
      { path: 'Patients', component: PatientListComponent },
      { path: 'PatientAdd', component: PatientAddComponent },
      { path: 'appointments', component: AppointmentListComponent },
      { path: 'invoices', component: InvoiceListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
