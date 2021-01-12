import { Component } from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {SessionService} from './core/services/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private sessionService: SessionService,
              private router: Router) {}

  get isSignedIn(): boolean {
    // vérifier si l'utilisateur est connecté
    return AuthService.isSignedIn;
    // return AuthService.user !==null; c'est apreil
  }


  signout() {
    // supprimer les données de dessions et retourner à la page de login
this.sessionService.clear();
AuthService.user = null;
this.router.navigate(['/auth/signin']);
  }
}
