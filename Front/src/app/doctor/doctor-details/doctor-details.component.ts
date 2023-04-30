import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent {
  doctor:any;
  constructor(public doctorServices:DoctorService,public activatedRoute:ActivatedRoute){
  }
  ngOnInit(){
   this.activatedRoute.params.subscribe(doc=>{
     console.log(doc['id']);
     this.doctorServices.getDoctorById(doc['id']).subscribe(data=>{
       this.doctor=data;
      console.log(this.doctor)
     })
   })
    
  }
}
