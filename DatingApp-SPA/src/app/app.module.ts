import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {AuthService} from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import {RouterModule} from '@angular/router'
import {appRoutes} from './routes';
import { from } from 'rxjs';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MemberDetailedComponent } from './members/member-Detailed/member-detailed.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import {UserDetailResolver} from '../app/_resolvers/UserDetailResolver'
import {UsersListResolver} from '../app/_resolvers/UsersListResolver'
import { NgxGalleryModule } from 'ngx-gallery-9';
// import { NgxGalleryModule } from ;

export function tokenGetter()
{
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [					
    AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailedComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: ["localhost:5000/api/auth"]
      }
    })
  ],
  providers: [
    AuthService ,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    UserDetailResolver,
    UsersListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
