import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentListByPatientComponent } from './appointment-list-by-patient/appointment-list-by-patient.component';
import { AppointmentListByDoctorComponent } from './appointment-list-by-doctor/appointment-list-by-doctor.component';
import { AppointmentListByClinicComponent } from './appointment-list-by-clinic/appointment-list-by-clinic.component';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
// MatterialUiModule,

@NgModule({
  declarations: [
    AppointmentAddComponent,
    AppointmentListComponent,
    AppointmentListByPatientComponent,
    AppointmentListByDoctorComponent,
    AppointmentListByClinicComponent,
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    MatChipsModule,
    ReactiveFormsModule,
  ],
  exports: [AppointmentAddComponent],
})
export class AppointmentModule {}
