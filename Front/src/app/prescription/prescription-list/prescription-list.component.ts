import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { Prescription } from 'src/app/models/prescription';
import { PrescriptionService } from 'src/app/services/prescription.service';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent {
  prescriptions : Prescription[]=[];
  constructor (private router: Router, private prescriptionService: PrescriptionService){}
  ngOnInit(){
    this.prescriptionService.getAll().subscribe((a:any)=>{
      this.prescriptions=a;
      console.log(this.prescriptions);
    }, error=>{
      console.log(error);
    })
  }
  GetDetails(id: number){
    sessionStorage.setItem('prescriptionId', JSON.stringify(id));
    this.prescriptionService.getById(id).subscribe((a:any)=>{
      this.router.navigate(['/prescription/details']);
    })
  }
  Delete(id:number){
    if(confirm('Are u sure u want to delete this item?')){
      this.prescriptionService.deleteById(id).subscribe(a=>{
        this.prescriptions = this.prescriptions.filter((pres)=>{
          pres._id = id;
        })
      })
    }
  }
}
