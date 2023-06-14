import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor( private router: Router) {}
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (localStorage.getItem('token') != null) {
      return true;
    } else {
      // Verificar si ya estás en la página de login
      if (state.url !== '/login') {
        return this.router.parseUrl('/login');
      } else {
        return true;
      }
    }
  }
}
