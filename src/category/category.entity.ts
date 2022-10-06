import { BaseAuditedEntity } from 'src/common/base.entity';
import { Product } from 'src/product/product.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class Category extends BaseAuditedEntity {
  @Column()
  title: string;

  @Column({ type: 'smallint' })
  order: number;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
