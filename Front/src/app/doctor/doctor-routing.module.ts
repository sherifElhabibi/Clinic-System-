import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DoctorListByClinicComponent } from './doctor-list-by-clinic/doctor-list-by-clinic.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorUpdateComponent } from './doctor-update/doctor-update.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { MyPatientsComponent } from './my-patients/my-patients.component';
import { AppointmentAddComponent } from '../appointment/appointment-add/appointment-add.component';

const routes: Routes = [
  { path: '', component: DoctorProfileComponent },
  { path: 'add', component: DoctorAddComponent },
  { path: 'list', component: DoctorListComponent },
  { path: 'listClinic', component: DoctorListByClinicComponent },
  { path: 'update', component: DoctorUpdateComponent },
  { path: 'schedule', component: DoctorScheduleComponent },
  { path: 'Profile', component: DoctorProfileComponent,children:[
    { path:'Appointments', component: MyAppointmentsComponent},
    { path:'Patients', component: MyPatientsComponent },
  ] },
  { path: 'book/:id', component: DoctorScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
