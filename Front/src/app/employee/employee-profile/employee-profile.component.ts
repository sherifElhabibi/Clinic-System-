import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css'],
})
export class EmployeeProfileComponent implements OnInit {
  emp!: Employee;
  constructor(
    public employeeService: EmployeeService,
    public patientService: PatientService
  ) {}
  ngOnInit(): void {
    this.employeeService.getById(parseInt(sessionStorage.getItem('userId')!)).subscribe((employee: any) => {
      this.emp = employee;
    });
  }
}
