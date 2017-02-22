import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DeliveryService, NavigationService } from '../_services/index';
import { Delivery } from '../_models/index';

@Component({
  moduleId: module.id,
  templateUrl: 'delivery.component.html'
})

export class DeliveryComponent implements OnInit {

  delivery = new Delivery();

  constructor (
    private deliveryService: DeliveryService,
    private navigationService: NavigationService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.deliveryService.getDeliveryWithKey(params['id']))
      .subscribe(delivery => {this.delivery = delivery});
  }

  edit(deliveryId) {
    this.navigationService.goTo('deliveries/'+deliveryId);
  }

  goToNewDelivery() {
    this.navigationService.goTo('deliveries/new');
  }
}
