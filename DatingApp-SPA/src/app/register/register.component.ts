import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register()
  {
    this.authService.register(this.model).subscribe(
      () => {
        const user = this.model;
        console.log(user.username + ' has registered ') 
    },
      error => {
        _error => console.log('error registering' + error); 
           }
    );
}

  cancel()
  {
    this.cancelRegister.emit(false);
    console.log('Error');
  }

}




  
