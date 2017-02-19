import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class NavigationService {

  constructor(
    private router: Router
  ) {

  }

  public goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  public goToLogin() {
    this.router.navigate(['/login']);
  }
  public goTo(url: String) {
    this.router.navigate([url]);
  }
}
