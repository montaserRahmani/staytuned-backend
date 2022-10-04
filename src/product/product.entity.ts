import { Category } from 'src/category/category.entity';
import { BaseAuditedEntity } from 'src/common/base.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class Product extends BaseAuditedEntity {
  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'smallint', nullable: true })
  order: number;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Category, (category) => category.id)
  category: Category;
}
