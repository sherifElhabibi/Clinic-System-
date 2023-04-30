import { Component } from '@angular/core';
import { passwordValidator } from '../../shared/validations/password.validation';
import { forbiddenName } from '../../shared/validations/username.validation';
import { FormBuilder,Validators } from '@angular/forms';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent {
  constructor(private fb: FormBuilder, public patientServ: PatientService) {}
  registrationForm = this.fb.group(
    {
      fname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z]*'),
          forbiddenName(/admin/),
        ],
      ],
      lname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z]*'),
          forbiddenName(/admin/),
        ],
      ],
      age: [
        '',
        [Validators.required, Validators.pattern(/^[1-9][0-9]?$|^100$/)],
      ],
      telephone: [
        '',
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
      ],
      gender: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/),
        ],
      ],
      password: [''],
      confirmPassword: [''],
      role: ['Patient'],
      address: this.fb.group({
        city: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
        street: ['', [Validators.required]],
        building: [
          '',
          [Validators.required, Validators.pattern(/^([1-9][0-9]{0,2}|1000)$/)],
        ],
      }),
    },
    { validator: passwordValidator }
  );

  getFname() {
    return this.registrationForm.get('fname');
  }
  getLname() {
    return this.registrationForm.get('lname');
  }
  getEmail() {
    return this.registrationForm.get('email');
  }
  getAge() {
    return this.registrationForm.get('age');
  }
  getNumber() {
    return this.registrationForm.get('telephone');
  }
  getCity() {
    return this.registrationForm.get('address.city');
  }
  getBuilding() {
    return this.registrationForm.get('address.building');
  }
  getStreet() {
    return this.registrationForm.get('address.street');
  }
  getRole(){
    return this.registrationForm.get('role');
  }


  display() {
    return console.log(this.registrationForm);
  }
  updateApi() {
    this.registrationForm.patchValue({
      fname: '',
      lname: '',
      age: '',
      telephone: '',
      gender: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
      address: {
        city: '',
        building: '',
        street: '',
      },
      salary: '',
      specialty: '',
      vezeeta: '',
      clinicId: '',
    });
  }

  registerNewUser(){
    this.patientServ.addPatient(this.registrationForm.value).subscribe(response=>console.log("success"), error=>console.log(error));
  }
}
 