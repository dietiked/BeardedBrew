import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthenticationRoutingModule } from './index';
import { AuthenticationService, AuthGuard } from './index';
import { LoginComponent } from './login/index';
import { AlertComponent, AlertService } from './alert/index';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    //AuthenticationRoutingModule
   ],
  declarations: [
    LoginComponent,
    AlertComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    AlertService
  ]
})
export class AuthenticationModule { }
