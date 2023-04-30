import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentListByClinicComponent } from './appointment-list-by-clinic/appointment-list-by-clinic.component';
import { AppointmentListByDoctorComponent } from './appointment-list-by-doctor/appointment-list-by-doctor.component';
import { AppointmentListByPatientComponent } from './appointment-list-by-patient/appointment-list-by-patient.component';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';

const routes: Routes = [
  { path: '', component: AppointmentListComponent },
  { path: 'listClinic', component: AppointmentListByClinicComponent },
  { path: 'listDoctor', component: AppointmentListByDoctorComponent },
  { path: 'listPatient', component: AppointmentListByPatientComponent },
  { path: 'add', component: AppointmentAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentRoutingModule {}
