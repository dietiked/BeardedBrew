import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Delivery, DeliveryService, BeardedBrewNavigationService } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './delivery.component.html'
})

export class DeliveryComponent implements OnInit {

  delivery = new Delivery();
  isLoading = true;

  constructor (
    private deliveryService: DeliveryService,
    private navigationService: BeardedBrewNavigationService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.deliveryService.getDeliveryWithKey(params['id']))
      .subscribe(delivery => {
        this.delivery.initWithFirebaseObject(delivery);
        this.isLoading = false;
      });
  }

  update(delivery) {
    this.deliveryService.updateDelivery(this.delivery);
  }

  cancel() {
    this.navigationService.goToDeliveries();
  }
}
