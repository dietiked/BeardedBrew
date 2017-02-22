import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Delivery } from '../_models/delivery';

@Injectable()
export class DeliveryService {

  deliveries: FirebaseListObservable<any[]>;
  currentDelivery: FirebaseObjectObservable<any>;
  deliveriesTable = '/deliveries';

  constructor(private af: AngularFire) {
    this.deliveries = this.af.database.list(this.deliveriesTable);
  }

  public getDeliveries() {
    return this.deliveries;
  }

  public addDelivery(delivery: Delivery): string {
    return this.deliveries.push(delivery).key;
  }

  public getDeliveryWithKey(key: string) {
    var url = this.deliveriesTable + '/' + key;
    this.currentDelivery = this.af.database.object(url);
    return this.currentDelivery;
    //return this.currentDelivery;
  }

  public updateDelivery(delivery: Delivery) {
    console.log('Delivery', this.currentDelivery);
    this.currentDelivery.update(delivery.normalize());
  }

}
