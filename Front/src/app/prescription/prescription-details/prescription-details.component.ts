import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrescriptionService } from 'src/app/services/prescription.service';

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.css']
})
export class PrescriptionDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private prescriptionService: PrescriptionService
  ) {}

  id!: any;
  data: any;
  medecines!: any;
  error = false;

  ngOnInit(): void {
    this.id = this.route.params.subscribe((prescription) => {
      this.prescriptionService.getById(parseInt(sessionStorage.getItem('prescriptionId')!)).subscribe(
        (b) => {
          this.data = b;
          this.medecines = this.data.medecineId;
          console.log(this.data)
          console.log(this.medecines)
        },
        (error) => {
          this.error = true;
        }
      );
    });
  }
}
