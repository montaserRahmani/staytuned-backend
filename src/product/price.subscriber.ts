import { DataSource, EntitySubscriberInterface, UpdateEvent } from 'typeorm';
import { EventSubscriber } from 'typeorm/decorator/listeners/EventSubscriber';
import { Product } from './product.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';

@EventSubscriber() 
export class PriceSubscriber implements EntitySubscriberInterface<Product> {
  emitter: EventEmitter2;

  constructor(dataSource: DataSource, emitter: EventEmitter2) {
    dataSource.subscribers.push(this);
    this.emitter = emitter;
  }

  // Limit the listener to listen for product events only
  listenTo() {
    return Product;
  }

  afterUpdate(event: UpdateEvent<Product>) {

    // Check whether the price column was updated or not
    const updated = event.updatedColumns.filter(
      (a) => a.propertyName === 'price',
    );

    if (updated.length) {
      console.log(event.databaseEntity.price, event.entity['price']);

      // if the price was update check whether the new price is less the old price with 1 unit or more
      if (event.entity['price'] <= event.databaseEntity.price - 1) {
        // Emit the event for price update to be handled by the listeners
        this.emitter.emit('product.priceUpdated', event.databaseEntity.id);
      }

    }

  }
}
