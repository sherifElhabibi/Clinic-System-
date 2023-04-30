import { Component,OnInit} from '@angular/core';
import { passwordValidator } from '../../shared/validations/password.validation';
import { forbiddenName } from '../../shared/validations/username.validation';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { RegisterService } from '../../services/register.service';
// import { ClinicService } from '../../clinic/clinic.service';
// import { Clinic } from '../../clinic/models/clinic';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit{
  constructor(private fb: FormBuilder, public registerServ: RegisterService/*,public clinicService:ClinicService*/) {
  }
  ngOnInit(): void {
    // this.clinicService.getAll().subscribe((data:any) => {
    //   // console.table(data.data);
    //   this.clinics = data.data;
    // });
}
  // clinics:Clinic[]=[];
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
      salary: [''],
      specialty: [''],
      vezeeta: [''],
      clinicId: [''],
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
  getSpecialty(){
    return this.registrationForm.get('specalty');
  }
  getVezeeta(){
    return this.registrationForm.get('veezeta');
  }
  getSalary(){
    return this.registrationForm.get('salary');
  }
  getClinic(){
    return this.registrationForm.get('clinicId');
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
    this.registerServ.registerNewUser(this.registrationForm.value).subscribe(response=>console.log("success"), error=>console.log(error));
  }

}