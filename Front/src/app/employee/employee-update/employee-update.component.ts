import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ClinicService } from 'src/app/services/clinic.service';
import {
  FormBuilder,
  Validator,
  Validators,
  FormGroup,
  ReactiveFormsModule,
  NgForm,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
})
export class EmployeeUpdateComponent {
  emp!: any;
  empid!: number;
  addingForm!: FormGroup;
  clinics: any;
  constructor(
    private employeeService: EmployeeService,
    private routes: Router,
    private clinicServices: ClinicService,
    private fb: FormBuilder
  ) {
    this.addingForm = this.fb.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('[a-zA-z*]'),
            // forbiddenName(/admin/),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('[a-zA-z*]'),
            // forbiddenName(/admin/),
          ],
        ],
        empAge: [
          '',
          [Validators.required, Validators.pattern('^[1-9][0-9]?$|^100$')],
        ],
        empGender: [''],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('[^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$]*'),
          ],
        ],
        password: [''],
        image: [''],
        empSalary: [
          '',
          [Validators.required, Validators.pattern('^[1-9][0-9]?$|^100$')],
        ],
        empPhone: [
          '',
          [Validators.required, Validators.pattern('^01[0125][0-9]{8}$')],
        ],
        clinicId: [
          '',
          [Validators.required, Validators.pattern('^[1-9][0-9]?$|^100$')],
        ],
        role: [{ value: 'Employee', disabled: true }],
        address: this.fb.group({
          city: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
          street: ['', [Validators.required]],
          building: [
            '',
            [
              Validators.required,
              Validators.pattern('^([1-9][0-9]{0,2}|1000)$'),
            ],
          ],
        }),
      }
      // { validator: passwordValidator }
    );
  }

  getFname() {
    return this.addingForm.get('firstName');
  }
  getLname() {
    return this.addingForm.get('lastName');
  }
  getAge() {
    return this.addingForm.get('empAge');
  }
  getGender() {
    return this.addingForm.get('empGender');
  }
  getEmail() {
    return this.addingForm.get('email');
  }
  getPassword() {
    return this.addingForm.get('password');
  }
  getSalary() {
    return this.addingForm.get('empSalary');
  }
  getPhone() {
    return this.addingForm.get('empPhone');
  }
  getClinic() {
    return this.addingForm.get('clinicId');
  }
  getRole() {
    return this.addingForm.get('role');
  }
  getCity() {
    return this.addingForm.get('address.city');
  }
  getBuilding() {
    return this.addingForm.get('address.building');
  }
  getStreet() {
    return this.addingForm.get('address.street');
  }
  updateApi() {
    this.addingForm.patchValue({
      firstName: '',
      lastName: '',
      empAge: '',
      empGender: '',
      empEmail: '',
      empPassword: '',
      empSalary: '',
      empPhone: '',
      clinicId: '',
      role: '',
      address: {
        city: '',
        building: '',
        street: '',
      },
      image: '',
    });
  }
  onSubmit() {
    this.employeeService.update(this.empid, this.addingForm.value).subscribe(
      (a) => console.log(a),
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.clinicServices.getAll().subscribe((c:any)=>{
      this.clinics=c;
      console.log(this.clinics, "clinic");
    })
    this.empid = parseInt(sessionStorage.getItem('empid')!);
    this.employeeService.getById(this.empid).subscribe((employee) => {
      this.emp = employee;
      console.log(this.emp);
      this.getFname()?.patchValue(this.emp.firstName);
      this.getLname()?.patchValue(this.emp.lastName);
      this.getAge()?.patchValue(this.emp.empAge);
      this.getGender()?.patchValue(this.emp.empGender);
      this.getEmail()?.patchValue(this.emp.email);
      this.getPassword()?.patchValue(this.emp.password);
      this.getSalary()?.patchValue(this.emp.empSalary);
      this.getPhone()?.patchValue(this.emp.empPhone);
      this.getClinic()?.patchValue(this.emp.clinicId.name);
      this.getCity()?.patchValue(this.emp.address.city);
      this.getBuilding()?.patchValue(this.emp.address.building);
      this.getStreet()?.patchValue(this.emp.address.street);
    });
  }
}
