import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: Employee[] = [];
  constructor(
    private employeeServices: EmployeeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.employeeServices.getAll().subscribe(
      (a: any) => {
        this.employees = a;
        console.log(this.employees);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  UpdateEmp(id:number){
    sessionStorage.setItem('empid', JSON.stringify(id));
    this.router.navigate(['/employee/update']);
  }

  Delete(id: number) {
    if (confirm('Are you sure, you want to delete it?')) {
      this.employeeServices.deleteById(id).subscribe((a) => {
        this.employees = this.employees.filter((emp) => emp._id != id);
      });
    }
  }
}
