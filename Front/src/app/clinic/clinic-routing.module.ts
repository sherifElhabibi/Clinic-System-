import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicListComponent } from './clinic-list/clinic-list.component';
import { ClinicAddComponent } from './clinic-add/clinic-add.component';
import { ClinicUpdateComponent } from './clinic-update/clinic-update.component';

const routes: Routes = [
  { path: '', component: ClinicListComponent },
  { path: 'add', component: ClinicAddComponent },
  { path: 'update', component: ClinicUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicRoutingModule {}
