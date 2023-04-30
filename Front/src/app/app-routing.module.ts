import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/notfound/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((e) => e.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((e) => e.AdminModule),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then((e) => e.EmployeeModule),
  },

  {
    path: 'patient',
    loadChildren: () =>
      import('./patient/patient.module').then((e) => e.PatientModule),
  },

  {
    path: 'prescription',
    loadChildren: () =>
      import('./prescription/prescription.module').then(
        (e) => e.PrescriptionModule
      ),
  },

  {
    path: 'invoice',
    loadChildren: () =>
      import('./invoice/invoice.module').then((e) => e.InvoiceModule),
  },

  {
    path: 'clinic',
    loadChildren: () =>
      import('./clinic/clinic.module').then((e) => e.ClinicModule),
  },
  {
    path: 'medicine',
    loadChildren: () =>
      import('./medicine/medicine.module').then((e) => e.MedicineModule),
  },
  {
    path: 'doctor',
    loadChildren: () =>
      import('./doctor/doctor.module').then((e) => e.DoctorModule),
  },

  {
    path: 'appointment',
    loadChildren: () =>
      import('./appointment/appointment.module').then(
        (e) => e.AppointmentModule
      ),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
