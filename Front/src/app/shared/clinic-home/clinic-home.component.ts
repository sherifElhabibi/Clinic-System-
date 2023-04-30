import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';
import { Clinic } from 'src/app/models/clinic';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-clinic-home',
  templateUrl: './clinic-home.component.html',
  styleUrls: ['./clinic-home.component.css'],
})
export class ClinicHomeComponent implements OnInit {
  clinic: Clinic[] = [];

  constructor(private clinicServices: ClinicService) {}

  ngOnInit(): void {
    this.clinicServices.getAll().subscribe((data: any) => {
      console.table(data.data);
      this.clinic = data.data;
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    center: true,
    stagePadding: 130,
    margin: 20,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
