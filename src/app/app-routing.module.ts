import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './authentication/index';
import { DashboardComponent } from './dashboard/index';
import { AuthGuard } from './authentication/index';
import {
  BeardedBrewHomeComponent,
  DeliveriesComponent,
  DeliveryComponent,
  NewDeliveryComponent
} from './beardedBrew/index';

const appRoutes: Routes = [
  // Application start
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // Bearded brew
  { path: 'beardedBrew', component: BeardedBrewHomeComponent, canActivate: [AuthGuard] },
  { path: 'beardedBrew/deliveries', component: DeliveriesComponent, canActivate: [AuthGuard] },
  { path: 'beardedBrew/deliveries/new', component: NewDeliveryComponent, canActivate: [AuthGuard] },
  { path: 'beardedBrew/deliveries/:id', component: DeliveryComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
