import { Component } from '@angular/core';
import { IDoctor } from 'src/app/models/idoctor';
import { Patient } from 'src/app/models/patient';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.css']
})
export class MyPatientsComponent {
  doctor!:IDoctor;
  docAppointmentes:any;
  patientInfo:any;
  myPatients:Patient[]=[];
  constructor(public doctorService:DoctorService,public patientService:PatientService){
    
  }

  ngOnInit(){ 
    this.doctorService.getDoctorById(109).subscribe((data:any)=>{
      this.doctor=data;
      this.docAppointmentes=data.appointments
    })
  }

}
