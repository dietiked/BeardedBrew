import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';

const authenticationRoutes: Routes = [
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(authenticationRoutes) ],
  exports: [ RouterModule ]
})
export class AuthenticationRoutingModule {}
