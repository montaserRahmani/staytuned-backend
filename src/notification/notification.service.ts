import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter/dist/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { lookup } from 'dns';
import { Notification } from './notification.entity';

@Injectable()
export class NotificationService extends TypeOrmCrudService<Notification> {
  constructor(@InjectRepository(Notification) repo) {
    super(repo);
  }

  @OnEvent('product.priceUpdated')
  async handlePriceUpdateEvent(productId: string) {
    // Get all the related notification to this product
    const notifications = await this.repo.find({
      where: {
        product: {
          id: productId,
        },
        isActive: true,
      },
    });

    if (notifications.length) {
      notifications.forEach((item: Notification) => {
        console.log('sending email to: ' + item.receiverEmail);

        // Sending email logic
      });
    }
  }
}
