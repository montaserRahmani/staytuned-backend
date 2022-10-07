import { BaseAuditedEntity } from 'src/common/base.entity';
import { Product } from 'src/product/product.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class Notification extends BaseAuditedEntity {
  @Column({ type: 'varchar', length: 50, nullable: true })
  receiverName: string;

  @Column({ type: 'varchar', length: 50 })
  receiverEmail: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Product, (product) => product.id)
  product: Product;
}
