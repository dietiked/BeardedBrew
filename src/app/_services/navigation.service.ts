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
  public goTo(url: string) {
    this.router.navigate([url]);
  }
  public goToDeliveries() {
    this.router.navigate(['/deliveries']);
  }
  public goToNewDelivery() {
    this.router.navigate(['/deliveries/new']);
  }
  public goToDeliveryWithKey(key: string) {
    this.router.navigate(['/deliveries', key]);
  }
}
