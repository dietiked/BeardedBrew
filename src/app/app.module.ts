// Angular core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Application
import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { AlertComponent } from './_directives/index';
import { AlertService, AuthenticationService, NavigationService } from './_services/index';
import { AuthGuard } from './_guards/index';
import { LoginComponent } from './login/index';
import { MenuComponent } from './menu/index';
import { DashboardComponent } from './dashboard/index';
import { DeliveryListComponent } from './delivery/index';

// Firebase configuration
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

const myFirebaseConfig = {
  apiKey: "AIzaSyAndGjcHfQPn_MPGPpknojI3YsJd1H_mvQ",
  authDomain: "beardedbrew-b60bc.firebaseapp.com",
  databaseURL: "https://beardedbrew-b60bc.firebaseio.com",
  storageBucket: "beardedbrew-b60bc.appspot.com",
  messagingSenderId: "143130756748"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

// Definition
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    MenuComponent,
    DashboardComponent,
    DeliveryListComponent,
  ],
  providers: [
    AuthenticationService,
    AlertService,
    AuthGuard,
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
