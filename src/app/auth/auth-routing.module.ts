import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'signin', component: SigninComponent,
  },
  {
    path: 'signup', component: SignupComponent,
  },
  {
    path: 'landing-page', component: LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
