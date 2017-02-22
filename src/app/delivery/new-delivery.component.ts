import { Component, OnInit } from '@angular/core';

import { Delivery } from '../_models/index';
import { DeliveryService, NavigationService } from '../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'new-delivery.component.html'
})

export class NewDeliveryComponent {

  delivery = new Delivery();

  constructor (private deliveryService: DeliveryService, private navigationService: NavigationService) {
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
