import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  name: any ;
  constructor(
    public authService: AuthService,
    private alertify: AlertifyService
  ) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {}
  // tslint:disable-next-line: typedef
  login() {
    // tslint:disable-next-line: no-unused-expression
    this.authService.login(this.model).subscribe(
      (next) => {
        // tslint:disable-next-line: no-unused-expression
        this.alertify.success('Logged in Successfully');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  // tslint:disable-next-line: typedef
  loggedIn() {
    // const token  = localStorage.getItem('token');
    // return !!token; // equlivilant to if (token == null) return false; else return true;

    return this.authService.loggedin();
  }
  // tslint:disable-next-line: typedef
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged Out');
  }
}
