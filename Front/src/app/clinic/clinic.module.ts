import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClinicRoutingModule } from './clinic-routing.module';
import { ClinicListComponent } from './clinic-list/clinic-list.component';
import { ClinicAddComponent } from './clinic-add/clinic-add.component';
import { ClinicUpdateComponent } from './clinic-update/clinic-update.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    ClinicListComponent,
    ClinicAddComponent,
    ClinicUpdateComponent,
  ],
  imports: [
    CommonModule,
    ClinicRoutingModule,
    CarouselModule,
    HttpClientModule,
  ],
})
export class ClinicModule {}
