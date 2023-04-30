import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientListByDoctorComponent } from './patient-list-by-doctor/patient-list-by-doctor.component';
import { PatientListByClinicComponent } from './patient-list-by-clinic/patient-list-by-clinic.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PatientDetailsComponent,
    PatientAddComponent,
    PatientListComponent,
    PatientListByDoctorComponent,
    PatientListByClinicComponent,
    PatientUpdateComponent,
    PatientProfileComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PatientModule { }
