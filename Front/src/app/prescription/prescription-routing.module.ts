import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrescriptionListByDoctorComponent } from './prescription-list-by-doctor/prescription-list-by-doctor.component';
import { PrescriptionAddComponent } from './prescription-add/prescription-add.component';
import { PrescriptionDetailsComponent } from './prescription-details/prescription-details.component';
import { PrescriptionListByPatientComponent } from './prescription-list-by-patient/prescription-list-by-patient.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';

const routes: Routes = [
  { path: '', component: PrescriptionListByDoctorComponent },
  { path: 'add', component: PrescriptionAddComponent },
  { path: 'details', component: PrescriptionDetailsComponent },
  { path: 'list', component: PrescriptionListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrescriptionRoutingModule {}
