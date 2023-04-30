import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';
let medicine: Medicine[] = [];

export interface PeriodicElement {
  name: string;
  type: string;
  expireDate: string;
  productionDate: string;
  companyname: string;
  image: string;
  offer: number;
}

@Component({
  selector: 'app-list-medicine',
  styleUrls: ['./list-medicine.component.css'],
  templateUrl: './list-medicine.component.html',
})
export class ListMedicineComponent implements OnInit {
  // medicine: Medicine[] = [];
  displayedColumns: string[] = [
    'name',
    'type',
    'expireDate',
    'productionDate',
    'CompanyName',
    'image',
    'offer',
  ];
  constructor(private medicineService: MedicineService) {}
  ngOnInit(): void {
    this.medicineService.getAllMedicine().subscribe((data) => {
      medicine = data.data;
    });
  }
}
