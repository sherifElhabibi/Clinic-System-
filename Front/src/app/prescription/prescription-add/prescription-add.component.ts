import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Prescription } from 'src/app/models/prescription';
import { PrescriptionPost } from 'src/app/models/prescription-post';
import { Clinic } from 'src/app/models/clinic';
import { IDoctor } from 'src/app/models/idoctor';

import {
  FormBuilder,
  Validator,
  Validators,
  FormGroup,
  ReactiveFormsModule,
  NgForm,
  FormControl,
  FormArray,
} from '@angular/forms';
import { PrescriptionService } from 'src/app/services/prescription.service';
import { ClinicService } from 'src/app/services/clinic.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';
import { MedicineService } from 'src/app/services/medicine.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { invoicePost } from 'src/app/models/invoicePost';
@Component({
  selector: 'app-prescription-add',
  templateUrl: './prescription-add.component.html',
  styleUrls: ['./prescription-add.component.css']
})
export class PrescriptionAddComponent {
  prescription!: PrescriptionPost;
  clinics: any[] = [];
  doctors: IDoctor[] = [];
  medicines: any[] = [];
  medicineIds: any[] = [];
  patient!: any;
  patientId!: number;
  medicineMap!: Map<string, number>;
  invoiceDetails!: invoicePost;
  vezeeta!:number
  constructor(
    private route: ActivatedRoute,
    private prescriptionService: PrescriptionService,
    private clinicServices: ClinicService,
    private doctorService: DoctorService,
    private patientService: PatientService,
    private fb: FormBuilder,
    private medicineService: MedicineService,
    private invoiceService: InvoiceService,
  ) {
    this.medicineMap = new Map<string,number>();
  }
  today = new Date();

  // for getting the values from form
  addingForm = this.fb.group({
    clinicid: ['', [Validators.required, Validators.pattern('[a-zA-z*]')]],
    doctorid: [''],
    medicineid: this.fb.array([this.newMedecine()]),
    patientid: ['', [Validators.required]],
    prescriptionDate: ['', [Validators.required]],
  });
  // for setting the values to post the values for the prescription after getting the ids from DB
  postform = this.fb.group({
    clinicid: [0],
    doctorid: [0],
    medicineid: this.fb.array<number>([]),
    patientid: [0],
    prescriptionDate: [''],
  });
  addMedecine() {
    this.addingForm.controls['medicineid'].push(this.newMedecine());
  }
  removeMedecine(i: number) {
    this.addingForm.controls['medicineid'].removeAt(i);
  }
  newMedecine(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {

    this.getDate()?.patchValue(formatDate(new Date(), 'yyyy-MM-dd', 'en'));
    

    this.patientService.getAllPatients().subscribe(
      (a: any) => {
        this.patient = a;
      },
      (error) => console.log(error)
    );


    this.medicineService.getAllMedicine().subscribe((med:any)=>{
      med.data.forEach((element:any) => {
        this.medicineMap.set(element.name, element._id);
      });
    })
    this.doctorService.getDoctorById(parseInt(sessionStorage.getItem('userId')!)).subscribe((a:any)=>{
      this.vezeeta = a.vezeeta;
      this.getClinic()?.patchValue(a.clinic._id);
      console.log(a.clinic._id, "id", this.addingForm.value.clinicid);
    })
  }
  getDate() {
    return this.addingForm.get('prescriptionDate');
  }
  getClinic() {
    return this.addingForm.get('clinicid');
  }
  getPatient() {
    return this.addingForm.get('patientid');
  }
  getDoctor() {
    return parseInt(sessionStorage.getItem('userId')!);
  }
  get Medecine() {
    return this.addingForm.controls['medicineid'] as FormArray;
  }
  getDoctorsOfClinic(id: string) {
    const clinicId = parseInt(id);
    this.clinicServices.getById(clinicId).subscribe((res: any) => {
      console.log(res);
      this.doctors = res.data.doctor;
    });
  }
  onPatientChange() {
    let patientName = this.getPatient()?.value;
    if (patientName) {
      for(let i = 0; i < this.patient.length; i++) {
        if (this.patient[i].fname + ' ' + this.patient[i].lname == patientName) {
          this.patientId = this.patient[i]._id;
          console.log(this.patientId);
        } else {
          console.log('not equal');
        }
      }
    }
  }
  onSubmit() {
    const medicines = this.addingForm.get('medicineid')?.value ;
    medicines?.forEach((element:any)=>{
      if(this.medicineMap.has(element.name)){
        this.medicineIds.push(this.medicineMap.get(element.name));
      }
    })
    const clinicId = parseInt(this.addingForm.value.clinicid!);
    const doctorId = parseInt(sessionStorage.getItem('userId')!);
    console.log(clinicId, ",", doctorId, "clinic and doctor");
    for(let i =0 ; i < this.medicineIds.length;i++){
      this.postform.value.medicineid?.push(this.medicineIds[i]);
    }
    this.postform.patchValue({
      clinicid: clinicId,
      doctorid: doctorId,
      patientid: this.patientId,
      prescriptionDate: this.addingForm.get('prescriptionDate')?.value,
    });
    console.log(typeof(this.postform.value.doctorid));
    this.prescriptionService.add(this.postform.value!).subscribe((a:any)=>console.log(a), error=>console.log(error));
    this.invoiceDetails = {
      patientId: this.patientId,
      patientModel: "patient",
      clinicId: +clinicId,
      invoiceDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
      invoiceTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
      status: "unpaid",
      total: this.vezeeta,
      paymentMethod: "Credit Card",
      paid: 0,
      totalDue: this.vezeeta
    }
    this.invoiceService.addInvoice(this.invoiceDetails).subscribe((a:any)=>console.log(a), error=>console.log(error))
  }
}
