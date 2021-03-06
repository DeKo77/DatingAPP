import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
basedUrl = environment.apiUrl + 'auth/';
jwtHelper = new JwtHelperService();
decodedToken: any;
constructor(private http: HttpClient) { }

login(model: any)
{
  return this.http.post(this.basedUrl + 'login' , model)
  .pipe(
    map((response: any) => {
      const user = response ;
      if (user)
      {
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
      }
    })
  );
}

loggedin()
{
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}
// tslint:disable-next-line: typedef
register(model: any)
{
  return this.http.post(this.basedUrl + 'register' , model);
  
}

}
