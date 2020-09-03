import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import {AuthService} from '../_services/auth.service';
import {AlertifyService} from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor( private authService: AuthService , private alertify:AlertifyService, private router: Router){}
  canActivate(): boolean{
    if(this.authService.loggedin())
    return true;
    this.alertify.error('You shall not Pass!!!');
    this.router.navigate(['home']);
  }
  
}
