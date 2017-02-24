export class Delivery {
  date: any;
  store: string;
  deliveryId: string;
  total = 0;

  initWithFirebaseObject(delivery: any) {
    this.date = delivery['date'];
    this.store = delivery['store'];
    this.deliveryId = delivery['deliveryId'];
    this.total = delivery['total'];
  }

  normalize() {
    return {
      date: this.date,
      store: this.store,
      deliveryId: this.deliveryId,
      total: this.total ? this.total : 0
    }
  }
}
