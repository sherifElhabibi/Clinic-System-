import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorUpdateComponent } from './doctor-update/doctor-update.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListByClinicComponent } from './doctor-list-by-clinic/doctor-list-by-clinic.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MyPatientsComponent } from './my-patients/my-patients.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { AppointmentModule } from '../appointment/appointment.module';
import { MatterialUiModule } from '../shared/matterial-ui/matterial-ui.module';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DoctorScheduleComponent,
    DoctorListComponent,
    DoctorAddComponent,
    DoctorUpdateComponent,
    DoctorDetailsComponent,
    DoctorListByClinicComponent,
    DoctorProfileComponent,
    MyPatientsComponent,
    MyAppointmentsComponent,
    
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    // FontAwesomeModule,
    MatIconModule,
    AppointmentModule,
    MatterialUiModule,
    MatChipsModule,
    ReactiveFormsModule 
  ]
})
export class DoctorModule { }
