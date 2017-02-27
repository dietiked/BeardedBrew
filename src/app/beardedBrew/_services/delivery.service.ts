import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Delivery } from '../index';

@Injectable()
export class DeliveryService {

  deliveries: FirebaseListObservable<any[]>;
  currentDelivery: FirebaseObjectObservable<Delivery>;
  deliveriesTable = '/deliveries';

  constructor(private af: AngularFire) {
    this.deliveries = this.af.database.list(this.deliveriesTable);
  }

  public getDeliveries(): FirebaseListObservable<any[]> {
    return this.deliveries;
  }

  public addDelivery(delivery: Delivery): string {
    return this.deliveries.push(delivery).key;
  }

  public getDeliveryWithKey(key: string): FirebaseObjectObservable<Delivery> {
    var url = this.deliveriesTable + '/' + key;
    this.currentDelivery = this.af.database.object(url);
    return this.currentDelivery;
  }

  public updateDelivery(delivery) {
    console.log('Delivery', this.currentDelivery);
    return this.currentDelivery.update(delivery);
  }

}
