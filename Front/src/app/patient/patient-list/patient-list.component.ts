import { Component } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { OnInit } from '@angular/core';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  constructor(private patientServ: PatientService) {
  }
  patients: Patient[]=[];
  ngOnInit(): void {
    this.patientServ.getAllPatients().subscribe(
      (response:any) => {
        this.patients = response;
        console.log(this.patients);
      },
      error => {
        console.log(error);
      }
    );
  }
  delete(id: number) {
    if (confirm('Are you sure, you want to delete it?')) {
      this.patientServ.deleteById(id).subscribe((a) => {
        this.patients = this.patients.filter((patient) => patient._id != id);
      });
    }
  }
}
