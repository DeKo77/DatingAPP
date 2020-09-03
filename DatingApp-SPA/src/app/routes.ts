import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { from } from 'rxjs';
export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '', //localhost:4200/one of the children routes will match
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard], //this will be applied to all children
    children: [
      { path: 'members', component: MemberListComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
