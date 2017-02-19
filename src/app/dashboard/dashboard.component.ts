import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService, NavigationService } from '../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private navigationService: NavigationService
  ) {
    this.authenticationService.authState().subscribe((state) => {
      if (state.result == 'logout') {
        this.navigationService.goToLogin();
      }
    });
  }

  ngOnInit() {
    console.log('Dashboard loaded');
  }

  goTo(url: String): void {
    this.navigationService.goTo(url);
  }

}
