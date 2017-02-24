import { Component, OnInit } from '@angular/core';

import { Delivery, DeliveryService, BeardedBrewNavigationService } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './new-delivery.component.html'
})

export class NewDeliveryComponent {

  delivery = new Delivery();

  constructor (
    private deliveryService: DeliveryService,
    private navigationService: BeardedBrewNavigationService
  ) {
  }

  add(delivery: Delivery) {
    console.log('New delivery', delivery);
    var key = this.deliveryService.addDelivery(delivery);
    this.navigationService.goToDeliveryWithKey(key);
  }

  cancel() {
    this.navigationService.goToDeliveries();
  }
}
