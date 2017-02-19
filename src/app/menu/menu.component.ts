import { Component } from '@angular/core';
import { AuthenticationService, NavigationService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'menu-component',
  templateUrl: 'menu.component.html'
})

export class MenuComponent {

  isUserLoggedIn = false;

  constructor(
    private authenticationService: AuthenticationService,
    private navigationService: NavigationService
  ) {
    this.authenticationService.authState().subscribe((state) => {
      this.isUserLoggedIn = authenticationService.isUserLoggedIn();
      if (state.result == 'logout') {
        this.navigationService.goToLogin();
      }
    });
  }

  signOut(): void {
    console.log("Password authentication");
    // Validate user credentials with Authentication service
    this.authenticationService.signOut();
  }
}
