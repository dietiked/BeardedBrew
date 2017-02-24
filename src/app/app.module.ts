// Angular core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Application
import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';

import { NavigationService, DeliveryService } from './_services/index';
import { MenuComponent } from './menu/index';
import { DashboardComponent } from './dashboard/index';
import { DeliveriesComponent, DeliveryComponent, NewDeliveryComponent } from './delivery/index';

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
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    AuthenticationModule,
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    DeliveriesComponent, DeliveryComponent, NewDeliveryComponent,
  ],
  providers: [
    NavigationService,
    DeliveryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
