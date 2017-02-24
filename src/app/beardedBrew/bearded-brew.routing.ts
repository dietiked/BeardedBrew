import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  BeardedBrewHomeComponent,
  DeliveriesComponent,
  DeliveryComponent,
  NewDeliveryComponent
} from './index';

import { AuthGuard } from '../authentication/index';

const beardedBrewRoutes: Routes = [
  { path: 'beardedBrew', component: BeardedBrewHomeComponent, canActivate: [AuthGuard] },
  { path: 'beardedBrew/deliveries', component: DeliveriesComponent, canActivate: [AuthGuard] },
  { path: 'beardedBrew/deliveries/new', component: NewDeliveryComponent, canActivate: [AuthGuard] },
  { path: 'beardedBrew/deliveries/:id', component: DeliveryComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(beardedBrewRoutes) ],
  exports: [ RouterModule ]
})
export class BeardedBrewRouting {}
