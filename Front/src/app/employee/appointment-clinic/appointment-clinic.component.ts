import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { IDoctor } from 'src/app/models/idoctor';
import { ClinicService } from 'src/app/services/clinic.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-appointment-clinic',
  templateUrl: './appointment-clinic.component.html',
  styleUrls: ['./appointment-clinic.component.css'],
})
export class AppointmentClinicComponent implements OnInit {
  doctors: IDoctor[] = [];
  appointments: any[] = [];
  empid!: any;
  clinicId!: any;

  constructor(
    public clinicService: ClinicService,
    public employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.empid = parseInt(sessionStorage.getItem('userId')!);
    // this.empid = 18;
    this.employeeService.getById(this.empid).subscribe((a: any) => {
      // this.clinicId = a.clinicId._id;
      this.clinicId = 5;
      this.clinicService.getById(this.clinicId).subscribe((d: any) => {
        this.doctors = d.data.doctor;
        console.log(this.doctors, "ghgyft");
        for(let i=0;i<this.doctors.length;i++){
          this.appointments.push(...this.doctors[i].appointments);
        }
      });
    });
  }
}
