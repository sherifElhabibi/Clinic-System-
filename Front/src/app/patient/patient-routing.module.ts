import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { PatientListByClinicComponent } from './patient-list-by-clinic/patient-list-by-clinic.component';
import { PatientListByDoctorComponent } from './patient-list-by-doctor/patient-list-by-doctor.component';

const routes: Routes = [
  { path: '', component: PatientProfileComponent },
  { path: 'add', component: PatientAddComponent },
  { path: 'list', component: PatientListComponent },
  { path: 'details', component: PatientDetailsComponent },
  { path: 'update/:id', component: PatientUpdateComponent },
  { path: 'listByClinic', component: PatientListByClinicComponent },
  { path: 'listByDoctor', component: PatientListByDoctorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
