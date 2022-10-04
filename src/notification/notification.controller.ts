import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Notification } from './notification.entity';
import { NotificationService } from './notification.service';

@Crud({
  model: {
    type: Notification,
  },
})
@Controller('notification')
export class NotificationController implements CrudController<Notification> {
  constructor(readonly service: NotificationService) {}
}
