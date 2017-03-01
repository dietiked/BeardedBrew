import { Component, OnInit } from '@angular/core';

import { DeliveryService, BeardedBrewNavigationService } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './deliveries.component.html'
})

export class DeliveriesComponent {

  deliveries = <any>[];
  isLoading = true;

  constructor (
    private deliveryService: DeliveryService,
    private navigationService: BeardedBrewNavigationService
  ) {
    this.deliveries = deliveryService.getDeliveries()
    this.deliveries.subscribe(x => {
      this.isLoading = false;
    })
  }

  edit(key) {
    this.navigationService.goToDeliveryWithKey(key);
  }

  goToNewDelivery() {
    this.navigationService.goToNewDelivery();
  }
}
