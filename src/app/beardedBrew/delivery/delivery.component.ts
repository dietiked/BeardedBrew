import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import {
  Delivery,
  Item,
  DeliveryService,
  ItemDeliveryService,
  BeardedBrewNavigationService
} from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './delivery.component.html'
})

export class DeliveryComponent implements OnInit {

  delivery = new Delivery();
  items = [];
  isLoading = true;
  isLoadingItems = false;

  constructor (
    private deliveryService: DeliveryService,
    private itemService: ItemDeliveryService,
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
    this.deliveryService.updateDelivery(this.delivery.normalize())
    .then((success)=>{
      this.navigationService.goToDeliveries();
    },
    (reject) => {
      console.log('Update reject', reject);
    });
  }

  cancel() {
    this.navigationService.goToDeliveries();
  }

  addItemRow() {

  }
}
