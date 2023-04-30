import { Component } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { IDoctor } from 'src/app/models/idoctor';
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
})
export class DoctorListComponent {
  doctors: IDoctor[] = [];
  faCoffee = faCoffee;
  constructor(public doctorService: DoctorService) {}

  ngOnInit(){
    this.doctorService.getAllDoctors().subscribe((data:any)=>{
      console.log(data);
      this.doctors = data;

      console.log(this.doctors);
    });
  }
}
