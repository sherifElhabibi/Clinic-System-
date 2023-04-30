import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionRoutingModule } from './prescription-routing.module';
import { PrescriptionAddComponent } from './prescription-add/prescription-add.component';
import { PrescriptionDetailsComponent } from './prescription-details/prescription-details.component';
import { PrescriptionListByDoctorComponent } from './prescription-list-by-doctor/prescription-list-by-doctor.component';
import { PrescriptionListByPatientComponent } from './prescription-list-by-patient/prescription-list-by-patient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';


@NgModule({
  declarations: [
    PrescriptionAddComponent,
    PrescriptionDetailsComponent,
    PrescriptionListByDoctorComponent,
    PrescriptionListByPatientComponent,
    PrescriptionListComponent
  ],
  imports: [
    CommonModule,
    PrescriptionRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PrescriptionModule { }
