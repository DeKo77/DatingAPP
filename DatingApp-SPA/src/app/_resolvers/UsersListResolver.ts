import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, ActivatedRoute , Router} from '@angular/router';
import {User} from '../_models/user';
import {UserService} from '../_services/user.service';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators'
import {AlertifyService} from '../_services/alertify.service'
@Injectable()
export class UsersListResolver implements Resolve<User[]>
{
 constructor(private userService:UserService , private router:Router,private alertify:AlertifyService){}
 resolve():Observable<User[]>{
   return this.userService.getUsers().pipe(
        catchError(
            error => {
                this.alertify.error('error retriveing members');
                this.router.navigate(['/home']);
                return of(null);
            }
        )
    )
 }

}
