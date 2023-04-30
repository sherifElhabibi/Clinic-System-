import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
// import {forbiddenName} from '../../../../shared/validations/user-name.validator'
// import {passwordValidator} from '../../../../shared/validations/password.validator'
import {
  FormBuilder,
  Validator,
  Validators,
  FormGroup,
  NgForm,
} from '@angular/forms';
import { ClinicService } from '../../services/clinic.service';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent {
  emp!: Employee;
  addingForm!: FormGroup;
  clinics: any[] = [];
  id: number = 0;
  constructor(
    private employeeService: EmployeeService,
    private clinicServices: ClinicService,
    private routes: Router,
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
      // {validator: passwordValidator}
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
  geetClinic() {
    this.id = parseInt(this.addingForm.get('clinicId')?.value);
    return this.id;
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
      email: '',
      password: '',
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

    // let result ={"firstName": this.getFname(), "lastName": this.getLname(), "empAge": this.getAge(),  };
    this.addingForm.value.clinicId = parseInt(this.addingForm.value.clinicId!);
    console.log(typeof this.addingForm.value.clinicid, 'typeOf');
    console.log('from ts', this.addingForm.value);
    this.employeeService.add(this.addingForm.value).subscribe(
      (a) => console.log(a),
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.clinicServices.getAll().subscribe((c: any) => {
      this.clinics = c;
      console.log(this.clinics, c);
    });
  }
}
