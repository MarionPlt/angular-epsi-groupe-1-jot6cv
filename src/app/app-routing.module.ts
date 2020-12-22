import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CanActivateGuard} from './core/can-activate.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
  },
  {
    path: 'dash',
    canActivate: [CanActivateGuard],
    loadChildren: () => import('./dash/dash.module').then(mod => mod.DashModule),
  },
  {
    path: '**',
    redirectTo: 'auth/signin' // redirection pour éviter de se retrouver sur la page vide localhost:4201
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
