import {Component} from '@angular/core';
import {SessionService} from './core/services/session.service';
import {AuthService} from './core/services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  get isSignedIn(): boolean {
    return AuthService.isSignedIn;
  }

  get isAdmin(): boolean {
    return AuthService.isAdmin;
  }

  signout() {
    // supprimer les données de sessions et retourner à la page de login
    this.router.navigate(['/auth/signin']).then(() => {
      this.sessionService.clear();
      AuthService.user = null;
      this.snackBar.open(' Vous avez bien été déconnecté!', 'Fermer', {
        duration: 2000,
      });
    });
  }

}

//TODO
// TP : exo 2
// faire une landing page ( dans le module Auth )
// avec des liens vers la page login et la page d'inscription et un message de bienvenue
// TP: exo 3
// partie admin
// créer un module admin
// créer une page d'accueil admin
// adapter la navigation pour rendre le dash accessible à tous
// les utilisateurs connectés et la partie uniquement accessible aux admins
// 4 : gestion des tags sur la page admin :
// créer un tableau ( Material )qui servira à afficher les domaines d'apprentissage ( tags )
// récupérer les domaines d'apprentissage dans le tableau
// afficher le nom et la popularité ( iteration )à partir de l'api : https://api.wecolearn.com/api/admin/tags
// ajouter la pagination
// ajouter une option pour filtrer les données

