import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../alert/index';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthenticationService } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  @Input()
  user = {email: 'test@test.com', password: 'test666'};

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.authenticationService.authState().subscribe(
      (state) => {
        if (state.result == 'login') { // User is logged in
          this.router.navigate(['dashboard']);
        } else if (state.result == 'error') { // Wrong username or password
          console.log('Display message: wrong username or password');
        } else if (state.result == 'logout') { // User is not logged in
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

  signinWithGoogle(): void {
    console.log("Google authentication");
    this.authenticationService.signInWithGoogle()
    .then((auth) => {
      //this.navigationService.goToDashboard();
    });
  }


}
