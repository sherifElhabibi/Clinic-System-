import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { AppointmentClinicComponent } from './appointment-clinic/appointment-clinic.component';

const routes: Routes = [
  { path: '', component: EmployeeProfileComponent },
  { path: 'add', component: EmployeeAddComponent },
  { path: 'list', component: EmployeeListComponent },
  { path: 'update', component: EmployeeUpdateComponent },
  {path: '', component: EmployeeProfileComponent, children:[
    {path: 'appointments', component: AppointmentClinicComponent},
    // {path: 'Patients', component:}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
