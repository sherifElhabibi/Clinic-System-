import { Component,OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient';
import { ActivatedRoute,Router } from '@angular/router';
// import { ApoointmentService } from 'src/app/modules/appoments/services/apoointment.service';
import { Appointment } from 'src/app/models/appointment';
import { PrescriptionService } from 'src/app/services/prescription.service';
import { Prescription } from 'src/app/models/prescription';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Invoice } from 'src/app/models/invoice'; 

@Component({
  selector: 'app-patient-Profile',
  templateUrl: './patient-Profile.component.html',
  styleUrls: ['./patient-Profile.component.css']
})
export class PatientProfileComponent implements OnInit{
  id!: number;
  patient!:Patient;
  // appoint!:ApoointmentService;
  appointments:Appointment[]=[];
  invoices:Invoice[] = [];
  prescriptions:Prescription[]=[];
  getAppointments: boolean = true;
  getPrescriptions: boolean = false;
  getInvoices: boolean = false;
  constructor(public patientService:PatientService,
    private activatedRoute:ActivatedRoute,
    private routes:Router, 
    // private appointServ:ApoointmentService,
    private invoiceServices:InvoiceService,
    private prescriptionServices:PrescriptionService){}
  ngOnInit(): void {
    this.id = Number(sessionStorage.getItem("userId"));
    this.patientService.getPatient(this.id).subscribe((item:any)=>{
      this.patient =item;
      console.log("from inside",item);
    });
    console.log(this.id)
    // this.appointServ.getAllAppoiments().subscribe((a:any)=>{
    //   this.appointments=a;
    //   this.appointments=this.appointments.filter((a:any)=>a.patient._id==this.id);
    //   console.log("blabla",a);
    //   console.log("After",this.appointments);
    // })
    this.prescriptionServices.getAll().subscribe((a:any)=>{
      this.prescriptions = a;
      console.log(this.prescriptions)
    })
    this.invoiceServices.getAll().subscribe((a: any) => {
      this.invoices = a;
    });
    this.prescriptions=this.prescriptions.filter((a:any)=>a.patient._id==this.id);
    this.invoices = this.invoices.filter((a:any)=>{
      return a.patient._id==this.id;
    })
}

  logOut(){
    sessionStorage.setItem("userId","");
    this.routes.navigateByUrl("");
  }

  GetAppointments() {
    this.getAppointments = true;
    this.getPrescriptions = false;
    this.getInvoices = false;
  }
  GetPrescriptions() {
    this.getAppointments = false;
    this.getPrescriptions = true;
    this.getInvoices = false;
  }
  GetInvoices() {
    this.getAppointments = false;
    this.getPrescriptions = false;
    this.getInvoices = true;
  }


  // deleteAppointment(id:number){
  //   if(confirm("Are you sure you want to delete")){
  //     this.appointServ.deleteAppointment(id).subscribe((a:any)=>{
  //       this.appointments=this.appointments.filter((a:any)=>a._id!=id);
  //   })}}
}
