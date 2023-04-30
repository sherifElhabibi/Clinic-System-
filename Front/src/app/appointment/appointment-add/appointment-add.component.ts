import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.css']
})
export class AppointmentAddComponent {
  reservationForm!: FormGroup;
  doctorId!:number;
  timeSlots:any;
  times: string[] = this.generateTimes('05:00', '12:00');
  startTime!:string;
  endTime!:string;
  patientId!:number;
  constructor(private fb: FormBuilder,public appointmentsServices:AppointmentService,public activatedRoute:ActivatedRoute,public doctorServices:DoctorService ) {
    this.createReservationForm();
    
  }
  getCurrentDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString();
    let day = currentDate.getDate().toString();

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  }
  generateTimes(startTime: string, endTime: string): string[] {
    const times = [];
    let currentTime = startTime;
    while (currentTime <= endTime) {
      times.push(currentTime);
      const hours = parseInt(currentTime.split(':')[0]);
      const minutes = parseInt(currentTime.split(':')[1]);
      const totalMinutes = hours * 60 + minutes + 30;
      const newHours = Math.floor(totalMinutes / 60);
      const newMinutes = totalMinutes % 60;
      currentTime = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
    }
    return times;
  }
  
 
  createReservationForm() {
    this.reservationForm = this.fb.group({
      // fullName: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // phone: ['', Validators.required],
      doctor:[],
      patient:[],
      date: ['', Validators.required],
      time: ['', Validators.required],
      // reason: ['', Validators.required],
      // notes: ['']
    });
  }

  ngOnInit(){
    this.patientId=Number(sessionStorage.getItem("userId"))
    this.activatedRoute.params.subscribe((doc:any)=>{
      console.log(doc['id']);
        this.doctorId=doc['id'];
        this.doctorServices.getDoctorById(doc['id']).subscribe((data:any)=>{
          console.log(data.schedule)
          this.timeSlots=data.schedule.timeSlots;
        })
    })
  }

  onSubmit() {

    console.log(this.reservationForm.value);
    this.reservationForm.get('doctor')?.setValue(this.doctorId);
    this.reservationForm.get('patient')?.setValue(this.patientId);//patientid
    this.appointmentsServices.addApointment(this.reservationForm.value).subscribe(data=>{
      console.log(data);
    },error=>{
      console.log(error);
    })
    // Code to submit reservation form data to the backend
  }
}
