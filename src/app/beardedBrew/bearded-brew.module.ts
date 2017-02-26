// Angular core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Plattform modules and services
import { AuthenticationModule } from '../authentication/import';
import { NavigationService } from '../_services/index';
// Plattform directives
import { LoaderComponent } from '../_directives/index';

// Apps modules and services
import { BeardedBrewNavigationService } from './index';
// App pages
import { BeardedBrewRouting } from './bearded-brew.routing';
import {
  BeardedBrewHomeComponent,
  DeliveryService,
  DeliveriesComponent,
  DeliveryComponent,
  NewDeliveryComponent
} from './index';

// Definition
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthenticationModule,
    BeardedBrewRouting
  ],
  declarations: [
    LoaderComponent,
    BeardedBrewHomeComponent,
    DeliveriesComponent,
    DeliveryComponent,
    NewDeliveryComponent,
  ],
  providers: [
    NavigationService,
    BeardedBrewNavigationService,
    DeliveryService
  ]
})
export class BeardedBrewModule { }
