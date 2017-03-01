import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NavigationService } from '../../_services/index';

@Injectable()
export class BeardedBrewNavigationService extends NavigationService {

  constructor(
    protected router: Router,
    private navigationService: NavigationService,
  ) {
    super(router);
  }

  public goToHome() {
    this.router.navigate(['/beardedBrew']);
  }
  public goToDeliveries() {
    this.router.navigate(['beardedBrew', 'deliveries']);
  }
  public goToNewDelivery() {
    this.router.navigate(['beardedBrew', 'deliveries', 'new']);
  }
  public goToDeliveryWithKey(key: string) {
    this.router.navigate(['beardedBrew', 'deliveries', key]);
  }
}
