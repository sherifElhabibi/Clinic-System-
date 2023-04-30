import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css'],
})
export class DoctorAddComponent {
  form!: FormGroup;
  errorEmailMessage!: String;
  errorFirstNameMessage!: string;
  selectedFile!: File;
  constructor(
    public doctorService: DoctorService,
    private fb: FormBuilder,
    public router: Router
  ) {
    // form builder is a buitl in service u can use to amke ur life easier
    this.createForm();
  }
  createForm() {
    const strongPasswordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[^\da-zA-Z]).{8,}$/;

    this.form = this.fb.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z]{3,}')],
      ],
      lastName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      specialty: ['', Validators.required],
      vezeeta: [
        0,
        [
          Validators.required,
          Validators.pattern(/^[0-9]+$/),
          Validators.min(100),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(strongPasswordPattern),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      salary: [
        0,
        [
          Validators.required,
          Validators.pattern(/^[0-9]+$/),
          Validators.min(3000),
        ],
      ],
      age: [
        0,
        [
          Validators.required,
          Validators.pattern(/^[0-9]+$/),
          Validators.min(25),
        ],
      ],
      gender: ['', Validators.required],
      clinic: [0, Validators.required],
      /*appointments: [0],*/
      schedule: this.fb.group({
        timeSlots: this.fb.array([this.createScheduleFormGroup()]),
      }),

      image: [''],
      role: ['' /*Validators.required*/],
      location: ['', [Validators.required]],
      degrees: ['', [Validators.required]],
    });
  }
  createScheduleFormGroup(): FormGroup {
    return this.fb.group({
      day: '',
      startTime: '',
      endTime: '',
    });
  }
  ///  properties
  get firstName() {
    return this.form.get('firstName');
  }

  //lastname
  get lastName() {
    return this.form.get('lastName');
  }
  get specialty() {
    return this.form.get('specialty');
  }

  get password() {
    return this.form.get('password');
  }
  get vezeeta() {
    return this.form.get('vezeeta');
  }
  get email() {
    return this.form.get('email');
  }
  get salary() {
    return this.form.get('salary');
  }

  get age() {
    return this.form.get('age');
  }

  get gender() {
    return this.form.get('gender');
  }
  get clinic() {
    return this.form.get('clinic');
  }
  get location() {
    return this.form.get('location');
  }
  get degrees() {
    return this.form.get('degrees');
  }
  ///
  get timeSlots(): FormArray {
    return this.form.get('schedule')?.get('timeSlots') as FormArray;
  }

  addSchedule() {
    this.timeSlots.push(this.createScheduleFormGroup());
  }

  uploadFile(event: any) {
    //  console.log("fileselected");
    //  const file =event.target.files[0] ;
    //  console.log(file.name);
    //  this.form.patchValue({
    //   image:file
    //  })
    // this.form.get('image')?.updateValueAndValidity();
    this.selectedFile = event.target.files[0];
    this.form.get('image')?.setValue(this.selectedFile.name);
    console.log(this.selectedFile);
    console.log(this.selectedFile.name);

    // const file = event.target.files[0];
    // this.form.get('image')?.setValue(file.name);
  }

  onSubmit() {
    console.log(this.form.value);
    const formData = new FormData();
    formData.append('firstName', this.form.get('firstName')?.value);
    formData.append('lastName', this.form.get('lastName')?.value);
    formData.append('specialty', this.form.get('specialty')?.value);
    formData.append('vezeeta', this.form.get('vezeeta')?.value);
    formData.append('password', this.form.get('password')?.value);
    formData.append('email', this.form.get('email')?.value);
    formData.append('salary', this.form.get('salary')?.value);
    formData.append('age', this.form.get('age')?.value);
    formData.append('gender', this.form.get('gender')?.value);
    formData.append('clinic', this.form.get('clinic')?.value);
    formData.append('location', this.form.get('location')?.value);
    formData.append('degrees', this.form.get('degrees')?.value);
    //formData.append('image', this.form.get("image")?.value);
    formData.append('image', this.selectedFile, this.selectedFile.name);
    formData.append('role', this.form.get('role')?.value);
    // formData.append('appointments', JSON.stringify(this.form.value.appointments));
    //formData.append('schedule', JSON.stringify(this.form.value.schedule));
    // formData.append('appointments', this.form.get('appointments')?.value);

    const schedule = this.form.get('schedule') as FormGroup;
    const timeSlots = schedule.get('timeSlots') as FormArray;

    timeSlots.controls.forEach((control, index) => {
      const timeSlot = control as FormGroup;
      const day = timeSlot?.get('day')?.value;
      const startTime = timeSlot.get('startTime')?.value;
      const endTime = timeSlot.get('endTime')?.value;

      formData.append(`schedule[timeSlots][${index}][day]`, day);
      formData.append(`schedule[timeSlots][${index}][startTime]`, startTime);
      formData.append(`schedule[timeSlots][${index}][endTime]`, endTime);
    });

    console.log(formData);

    this.doctorService.addDoctor(formData).subscribe(
      (data) => {
        console.log(data);
        // this.router.navigateByUrl('/admin');
      },
      (error) => {
        console.log(error);
        // if(error.error.message.includes('email')){
        //   this.errorEmailMessage=error.error.message;
        // }else if(error.error.message.includes('firstName')){
        //   this.errorFirstNameMessage=error.error.message;
        // }
      }
    );
  }
}
