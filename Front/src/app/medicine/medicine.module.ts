import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MedicineRoutingModule } from './medicine-routing.module';
import { MainMedicineComponent } from './main-medicine/main-medicine.component';
import { MedicineCateComponent } from './medicine-cate/medicine-cate.component';
import { OfferComponent } from './offer/offer.component';
import { SupplementComponent } from './supplement/supplement.component';
import { HerbsComponent } from './herbs/herbs.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { MatInputModule } from '@angular/material/input';
import { MedicineListComponent } from './medicine/medicine-list/medicine-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    MainMedicineComponent,
    MedicineCateComponent,
    OfferComponent,
    SupplementComponent,
    HerbsComponent,
    MedicineComponent,
    ProductMainComponent,
    ProductHeaderComponent,
    ProductListComponent,
    CartComponent,
    CartListComponent,
    MedicineListComponent,
  ],
  imports: [
    CommonModule,
    MedicineRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
})
export class MedicineModule {}
