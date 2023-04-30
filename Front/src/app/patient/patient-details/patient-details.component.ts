import { Component,OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit{
  id!: number;
  patient!:Patient;
  constructor(public patientService:PatientService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.id = Number(sessionStorage.getItem("userId"));
    this.patientService.getPatient(this.id).subscribe((item:any)=>{
      this.patient =item;
      console.log("from inside",item);
    });
  }
}
