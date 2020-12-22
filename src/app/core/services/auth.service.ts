import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../entities/user';

import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {SessionService} from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static user: User = null;
  static get isSignedIn(): boolean {
    return !!AuthService.user;
  }

  constructor(
    private httpClient: HttpClient,
    private sessionService: SessionService
  ) { }

  signin(email: string, password: string): Observable<any> {
    return this.httpClient.post(
      `${environment.api}/api/login_check`,
      {
        email,
        password
      }
    ).pipe(
      tap((result) => {
        this.sessionService.setToken(result.token);
      }),
    );
  }

  signup(user: User): Observable<any> {
    return this.httpClient.post(
      `${environment.api}/api/signup`,
      user
    );
  }

  // vérifier si l'utilisateur est connecté et récupérer les données de l'utilisateur
  me(): Observable<any> {
    return this.httpClient.get(
      `${environment.api}/api/ping`,
    ).pipe(
      tap((user: User) => {
        AuthService.user = user;
      })
    );
  }
  signout(): void {
    this.sessionService.clear();
    AuthService.user = null;
  }

}
