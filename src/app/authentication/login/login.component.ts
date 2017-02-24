import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../alert/index';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthenticationService, AuthenticationMessage } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  @Input()
  user = {email: 'test@test.com', password: 'test666'};

  constructor(
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.authenticationService.authState().subscribe(
      (message: AuthenticationMessage) => {
        if (message.isLogin()) { // User is logged in
          this.router.navigate(['dashboard']);
        } else if (message.isError()) { // Wrong username or password
          this.alertService.error(message.message);
          console.log('Display message: wrong username or password');
        } else if (message.isLogout()) { // User is not logged in
          this.router.navigate(['login']);
        }
      }
    );
  }

  ngOnInit(): void {
  }

  signinWithPassword(): void {
    console.log("Password authentication");
    // Validate user credentials with Authentication service
    this.authenticationService.signInWithPassword(this.user.email, this.user.password)
  }


}
