import { Component } from '@angular/core';
import { IDoctor } from 'src/app/models/idoctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css'],
})
export class DoctorProfileComponent {
  doctor!:IDoctor;
  docAppointmentes:any;
  patientInfo:any;
  doctorId!:number;
  constructor(
    public doctorService: DoctorService,
    public patientService: PatientService
  ) {}

  ngOnInit(){
    this.doctorId=Number(sessionStorage.getItem("userId"))
     this.doctorService.getDoctorById(1).subscribe((data:any)=>{
       this.doctor=data;
       this.docAppointmentes=data.appointments
       console.log(this.doctor)
     },error=>{
      console.log(error)
     })
   }
}
