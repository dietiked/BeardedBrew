import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/index';
import { DeliveriesComponent, DeliveryComponent, NewDeliveryComponent } from './delivery/index';
import { LoginComponent } from './login/index';
//import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'deliveries', component: DeliveriesComponent, canActivate: [AuthGuard] },
    { path: 'deliveries/new', component: NewDeliveryComponent, canActivate: [AuthGuard] },
    { path: 'deliveries/:id', component: DeliveryComponent, canActivate: [AuthGuard] },
    //{ path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    //{ path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
