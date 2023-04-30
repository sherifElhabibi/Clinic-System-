import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDoctor } from 'src/app/models/idoctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css']
})
export class DoctorScheduleComponent {
  doctor!:IDoctor;
  doctorSchedule:any;
  constructor(public doctorServices:DoctorService,public activatedRoute:ActivatedRoute){
 
  }

  ngOnInit(){
   this.activatedRoute.params.subscribe(doc=>{
     console.log(doc['id']);
     this.doctorServices.getDoctorById(doc['id']).subscribe((data:any)=>{
       this.doctor=data;
       this.doctorSchedule=this.doctor.schedule.timeSlots;
      console.log(this.doctorSchedule);
     })
   })
    
  }
}
