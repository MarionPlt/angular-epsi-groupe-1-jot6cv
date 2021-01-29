
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilAdminComponent} from './accueil-admin/accueil-admin.component';

const routes: Routes = [
  {
    path: 'accueil-admin', component: AccueilAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
