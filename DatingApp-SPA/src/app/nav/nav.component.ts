import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
login(){
  // tslint:disable-next-line: no-unused-expression
  this.authService.login(this.model).subscribe(next => {
    // tslint:disable-next-line: no-unused-expression
    console.log('Logged in Succesfully'), error => {
      console.log('Failed to Login')
    }
  });
}
// tslint:disable-next-line: typedef
loggedIn()
{
  const token  = localStorage.getItem('token');
  return !!token; // equlivilant to if (token == null) return false; else return true; 
}
// tslint:disable-next-line: typedef
logout() 
{
  localStorage.removeItem('token');
  console.log('Logged Out');
}
}
