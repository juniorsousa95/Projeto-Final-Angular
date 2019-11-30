import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { PaginaNotFoundComponent } from './pagina-not-found/pagina-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { FriendRequestComponent } from './friend-request/friend-request.component';



const routes: Routes = [
  {path:'pagina-login', component:PaginaLoginComponent},
  {path:'page-profile', component:PageProfileComponent},
  {path:"", redirectTo:"/pagina-login", pathMatch: "full"},
  {path:'**',component:PaginaNotFoundComponent},
  {path:'profile', component:ProfileComponent},
  {path:'upcoming-events', component:UpcomingEventsComponent},
  {path:'friend-request', component:FriendRequestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
