import { Component, OnInit } from '@angular/core';

import { DeliveryService, NavigationService } from '../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'deliveries.component.html'
})

export class DeliveriesComponent {

  deliveries = <any>[];

  constructor (private deliveryService: DeliveryService, private navigationService: NavigationService) {
    this.deliveries = deliveryService.getDeliveries();
  }

  edit(key) {
    this.navigationService.goToDeliveryWithKey(key);
  }

  goToNewDelivery() {
    this.navigationService.goToNewDelivery();
  }
}
