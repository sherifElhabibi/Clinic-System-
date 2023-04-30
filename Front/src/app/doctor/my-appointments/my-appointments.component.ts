import { Component } from '@angular/core';
import { IDoctor } from 'src/app/models/idoctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})
export class MyAppointmentsComponent {
  doctor!:IDoctor;
  docAppointmentes:any;
  constructor(public doctorService:DoctorService,public patientService:PatientService){
    
  }

  ngOnInit(){
    this.doctorService.getDoctorById(109).subscribe((data:any)=>{
      this.doctor=data;
      this.docAppointmentes=data.appointments
      console.log(this.doctor.appointments)
    })
  }
}
