import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Notification } from './notification.entity';

@Injectable()
export class NotificationService extends TypeOrmCrudService<Notification> {
  constructor(@InjectRepository(Notification) repo) {
    super(repo);
  }
}
