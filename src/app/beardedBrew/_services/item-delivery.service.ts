import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Item } from '../index';

@Injectable()
export class ItemDeliveryService {

  itemsDelivery: FirebaseListObservable<any[]>;
  itemsDeliveryTable = '/itemsDelivery';

  constructor(private af: AngularFire) {
  }

  public getItemsForDelivery(deliveryKey:string) {
    return this.af.database.list(this.itemsDeliveryTable, {
      query: {
        equalTo: deliveryKey
      }
    });
  }

  public addItemToDelivery(item, delivery) {
    this.af.database.list(this.itemsDeliveryTable).push(item);
  }

}
