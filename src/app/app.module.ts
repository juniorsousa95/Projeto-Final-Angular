import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { PaginaNotFoundComponent } from './pagina-not-found/pagina-not-found.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaLoginComponent,
    PageProfileComponent,
    PaginaNotFoundComponent,
    UpcomingEventsComponent,
    FriendRequestComponent,
    ProfileComponent,

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
