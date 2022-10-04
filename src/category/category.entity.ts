import { BaseAuditedEntity } from 'src/common/base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Category extends BaseAuditedEntity {
  @Column()
  title: string;

  @Column({ type: 'smallint' })
  order: number;

  @Column({ default: true })
  isActive: boolean;
}
