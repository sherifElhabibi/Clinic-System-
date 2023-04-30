import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchHomeComponent } from './search-home/search-home.component';
import { LookingforHomeComponent } from './lookingfor-home/lookingfor-home.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ClinicHomeComponent } from './clinic-home/clinic-home.component';

@NgModule({
  declarations: [HomeComponent, SearchHomeComponent, LookingforHomeComponent, ClinicHomeComponent],
  imports: [CommonModule, CarouselModule],
})
export class SharedModule {}
