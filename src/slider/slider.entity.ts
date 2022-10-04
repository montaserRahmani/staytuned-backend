import { BaseAuditedEntity } from 'src/common/base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Slider extends BaseAuditedEntity {
  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'smallint', nullable: true })
  order: number;

  @Column({ default: true })
  isActive: boolean;
}
