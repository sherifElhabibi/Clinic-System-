import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { MainMedicineComponent } from './main-medicine/main-medicine.component';
import { SupplementComponent } from './supplement/supplement.component';
import { MedicineComponent } from './medicine/medicine.component';
import { HerbsComponent } from './herbs/herbs.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { CartComponent } from './cart/cart.component';
import { ListMedicineComponent } from './list-medicine/list-medicine.component';

const routes: Routes = [
  {
    path: '',
    component: MainMedicineComponent,
    children: [
      { path: 'supplement', component: SupplementComponent },
      { path: 'medicineCate', component: MedicineComponent },
      { path: 'herbs', component: HerbsComponent },
    ],
  },
  { path: 'product', component: ProductHeaderComponent },
  { path: 'cart', component: CartComponent },
  { path: 'list', component: ListMedicineComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicineRoutingModule {}
