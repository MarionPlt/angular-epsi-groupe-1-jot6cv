import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import {AdminRoutingModule} from './admin-routing.module';



@NgModule({
  declarations: [AccueilAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
