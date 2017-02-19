import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService, NavigationService } from '../_services/index';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  @Input()
  user = {email: 'test@test.com', password: 'test666'};

  constructor(
    private authenticationService: AuthenticationService,
    private navigationService: NavigationService
  ) {
    this.authenticationService.authState().subscribe(
      (state) => {
        if (state.result == 'login') { // User is logged in
          this.navigationService.goToDashboard();
        } else if (state.result == 'error') { // Wrong username or password
          console.log('Display message: wrong username or password');
        } else if (state.result == 'logout') { // User is not logged in
          this.navigationService.goToLogin();
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
      this.navigationService.goToDashboard();
    });
  }


}
