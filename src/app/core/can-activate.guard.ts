import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from './services/auth.service';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(private authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.me().pipe(
      catchError((response: Response) => {

        let status = 500;
        if (response.status === 401 || response.status === 403) {
          status = response.status;
        }
        return of({ status });
      }),
      map((response: Response ) => {
        if (response.status === 401 || response.status === 403) {
          return false;
        }
        return true;
      })
    );
  }

}
