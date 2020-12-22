import { NgModule } from '@angular/core';
import {DashRoutingModule} from './dash-routing.module';
import { HomeComponent } from './components/home/home.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    DashRoutingModule,
    SharedModule
  ]
})
export class DashModule { }
