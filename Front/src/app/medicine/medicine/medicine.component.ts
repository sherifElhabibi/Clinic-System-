import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css'],
})
export class MedicineComponent {
  Medicine: Medicine[] = [];
  Cart: any = [];

  constructor(
    private medicineService: MedicineService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.medicineService.getAllMedicine().subscribe((data) => {
      console.table(data.data);
      this.Medicine = data.data;
    });
  }
  Add(id: number) {
    this.medicineService.getMedicineById(id).subscribe((data) => {
      if ('cart' in localStorage) {
        this.Cart = JSON.parse(localStorage.getItem('cart')!);

        this.Cart.push(data);
        localStorage.setItem('cart', JSON.stringify(this.Cart));
      } else {
        this.Cart.push(data);
        localStorage.setItem('cart', JSON.stringify(this.Cart));
      }
      // localStorage.setItem('cart', JSON.stringify(data));
    });
    // this.Cart = localStorage.getItem(JSON.parse('cart'));
    // console.log(this.Cart);
    // JSON.stringify(localStorage.setItem('cart', id.toString()));
  }
}
