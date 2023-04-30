import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatterialUiModule } from 'src/app/shared/matterial-ui/matterial-ui.module';
import { NotFoundComponent } from './shared/notfound/not-found/not-found.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
// import { EmployeeModule } from './employee/employee.module';
import { EmployeeModule } from './employee/employee.module';
import { DoctorModule } from './doctor/doctor.module';
import { ClinicModule } from './clinic/clinic.module';
// import { PrescriptionModule } from './prescription/prescription.module';
import { AppointmentModule } from './appointment/appointment.module';
import { InvoiceModule } from './invoice/invoice.module';
import { MedicineModule } from './medicine/medicine.module';
import { PatientModule } from './patient/patient.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatterialUiModule,
    RouterModule,
    AppRoutingModule,
    AppointmentModule,
    ClinicModule,
    EmployeeModule,
    InvoiceModule,
    MedicineModule,
    PatientModule,
    // PrescriptionModule,
    MatSnackBarModule,
    SharedModule,
    FontAwesomeModule,
    DoctorModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
